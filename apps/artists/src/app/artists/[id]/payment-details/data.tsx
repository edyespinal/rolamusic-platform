import React from "react";
import { ArtistPayment } from "@rola/services/schemas";
import { useToast } from "@rola/ui/components";
import { useForm } from "react-hook-form";

// type FormValues = {
//   name: string
//   type: ArtistPayment["type"]
//   documentType: ArtistPayment["document"]["type"]
//   documentNumber: string
//   street: string
//   city: string
//   province: string
//   postalCode: string
//   country: string
//   preference: ArtistPayment["paymentPreference"]
//   preferenceType: ArtistPayment["paymentPreference"]["type"]
//   preferenceCountry: string
//   preferenceEmail: string
//   preferenceBank: string
//   preferenceAccountHolder: string
//   preferenceAccountNumber: string
// };

type FormValues = ArtistPayment;

const useArtistPaymentDetailsData = (payment: ArtistPayment) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      ...payment,
    },
  });

  async function handleSubmit(values: FormValues) {
    setIsLoading(true);

    // eslint-disable-next-line no-console
    console.log(values);

    try {
      toast({
        title: "Detalles de pago actualizados",
        description: "Detalles de pago actualizados correctamente",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "No se pudo actualizar los detalles de pago",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  }

  return {
    form,
    handleSubmit,
    isLoading,
  };
};

export { useArtistPaymentDetailsData, type FormValues };
