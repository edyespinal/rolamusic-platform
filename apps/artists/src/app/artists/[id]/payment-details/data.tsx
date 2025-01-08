import React from "react";
import { useForm } from "react-hook-form";
import { Artist, ArtistPayment } from "@rola/services/schemas";
import { db } from "@rola/services/firebase";
import { useToast } from "@rola/ui/components";
import {
  addBankAccount,
  createStripeAccount,
  updateStripeAccounts,
} from "./actions";

type CreateAccountFormValues = {
  type: "individual" | "company";
  firstName: string;
  lastName: string;
  documentType: "DNI" | "NIE" | "NIF" | "CIF";
  documentNumber: string;
  email: string;
  phone: {
    countryCode: string;
    number: string;
  };
  dateOfBirth: string;
  website: string;
  address: {
    street: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
  };
};

type AddBankAccountFormValues = {
  bankName: string;
  accountNumber: string;
  accountHolderName: string;
};

type Step = "create-account" | "add-bank" | "edit";

type UseArtistPaymentDetailsData = {
  isLoading: boolean;
  step: Step;
  createAccountForm: ReturnType<typeof useForm<CreateAccountFormValues>>;
  addBankAccountForm: ReturnType<typeof useForm<AddBankAccountFormValues>>;
  paymentDetailsForm: ReturnType<typeof useForm<ArtistPayment>>;
  handleCreateAccount: (values: CreateAccountFormValues) => Promise<void>;
  handleAddBankAccount: (values: AddBankAccountFormValues) => Promise<void>;
  handleUpdatePaymentDetails: (values: ArtistPayment) => Promise<void>;
};

const useArtistPaymentDetailsData = (
  artist: Artist,
  payment: ArtistPayment | null
): UseArtistPaymentDetailsData => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [artistPayment, setArtistPayment] =
    React.useState<ArtistPayment | null>(payment);
  const [step, setStep] = React.useState<Step>(
    !payment
      ? "create-account"
      : !payment.paymentPreferences?.bank
        ? "add-bank"
        : "edit"
  );

  const { toast } = useToast();

  const createAccountForm = useForm<CreateAccountFormValues>({
    defaultValues: {
      type: "individual",
      firstName: "",
      lastName: "",
      documentNumber: "",
      email: "",
      phone: {
        countryCode: "+34",
        number: "",
      },
      dateOfBirth: "",
      website: "",
      address: {
        street: "",
        line2: "",
        city: "",
        state: "",
        postalCode: "",
      },
    },
  });

  const addBankAccountForm = useForm<AddBankAccountFormValues>({
    defaultValues: {
      bankName: "",
      accountNumber: "",
      accountHolderName: "",
    },
  });

  const paymentDetailsForm = useForm<ArtistPayment>({
    defaultValues: {
      ...artistPayment,
    },
  });

  async function handleCreateAccount(values: CreateAccountFormValues) {
    setIsLoading(true);

    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const { ip } = await ipResponse.json();

      const account = await createStripeAccount(artist.id, artist.name, {
        ...values,
        ip,
      });

      await db.artists.updateArtistPaymentDetails(artist.id, {
        type: values.type,
        firstName: values.firstName,
        lastName: values.lastName,
        document: {
          type: values.documentType,
          number: values.documentNumber,
        },
        address: {
          street: values.address.street,
          city: values.address.city,
          state: values.address.state,
          postalCode: values.address.postalCode,
          country: "ES",
        },
        email: values.email,
        phone: {
          countryCode: values.phone.countryCode,
          number: values.phone.number,
        },
        stripeAccountId: account.id,
      });

      toast({
        title: "Cuenta creada",
        description: "Se ha creado la cuenta de pagos",
      });

      setArtistPayment({
        type: values.type,
        firstName: values.firstName,
        lastName: values.lastName,
        document: {
          type: values.documentType,
          number: values.documentNumber,
        },
        address: {
          street: values.address.street,
          city: values.address.city,
          state: values.address.state,
          postalCode: values.address.postalCode,
          country: "ES",
        },
        email: values.email,
        phone: {
          countryCode: values.phone.countryCode,
          number: values.phone.number,
        },
        stripeAccountId: account.id,
      });
      setStep("add-bank");
    } catch (error) {
      console.error(error);

      toast({
        title: "Error",
        description:
          "No se pudo crear la cuenta de pagos. Revise los datos e inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleAddBankAccount(values: AddBankAccountFormValues) {
    if (!artistPayment?.stripeAccountId) {
      toast({
        title: "Error",
        description: "No se ha podido crear la cuenta de pagos",
        variant: "destructive",
      });

      return;
    }

    setIsLoading(true);

    try {
      const bankAccount = await addBankAccount(
        artistPayment.stripeAccountId,
        values
      );

      const updatedPaymentPreferences: ArtistPayment["paymentPreferences"] = {
        type: "bankTransfer",
        country: "ES",
        bank: {
          bankName: values.bankName,
          accountHolder: values.accountHolderName,
          accountNumber: values.accountNumber,
          stripeBankAccountId: bankAccount.id,
        },
        currency: "eur",
      };

      await db.artists.updateArtistPaymentDetails(artist.id, {
        paymentPreferences: updatedPaymentPreferences,
      });

      setArtistPayment({
        ...artistPayment,
        paymentPreferences: updatedPaymentPreferences,
      });

      paymentDetailsForm.reset({
        ...artistPayment,
        paymentPreferences: updatedPaymentPreferences,
      });

      toast({
        title: "Cuenta de pagos actualizada",
        description: "Se ha actualizado la cuenta de pagos",
      });

      setStep("edit");
    } catch (error) {
      console.error(error);

      toast({
        title: "Error",
        description:
          "No se pudo actualizar la cuenta de pagos. Revisa los datos e inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleUpdatePaymentDetails(values: ArtistPayment) {
    if (!artistPayment?.stripeAccountId) {
      toast({
        title: "Error",
        description: "No se ha podido actualizar la cuenta de pagos",
        variant: "destructive",
      });

      return;
    }

    setIsLoading(true);

    try {
      await db.artists.updateArtistPaymentDetails(artist.id, values);

      await updateStripeAccounts(
        artistPayment.stripeAccountId,
        values.paymentPreferences?.bank?.stripeBankAccountId ?? "",
        values
      );

      setArtistPayment(values);

      toast({
        title: "Datos actualizados",
        description: "Se ha actualizado la cuenta de pagos",
      });
    } catch (error) {
      console.error(error);

      toast({
        title: "Error",
        description:
          "No se pudo actualizar la cuenta de pagos. Revisa los datos e inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    step,
    createAccountForm,
    addBankAccountForm,
    paymentDetailsForm,
    handleCreateAccount,
    handleAddBankAccount,
    handleUpdatePaymentDetails,
  };
};

export {
  useArtistPaymentDetailsData,
  type CreateAccountFormValues,
  type AddBankAccountFormValues,
};
