import React from "react";
import { ArtistPayment } from "@rola/services/schemas";
import { useToast } from "@rola/ui/components";
import { useForm } from "react-hook-form";
import { services } from "@rola/services/firebase";

type FormValues = ArtistPayment;

const useArtistPaymentDetailsData = (id: string, payment: ArtistPayment) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      ...payment,
    },
  });

  async function handleSubmit(values: FormValues) {
    setIsLoading(true);

    try {
      await services.updateArtistPaymentDetails(id, values);

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
