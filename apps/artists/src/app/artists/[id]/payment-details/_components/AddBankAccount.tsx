import React from "react";
import { UseFormReturn } from "react-hook-form";
import {
  Button,
  CarouselItem,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Title,
} from "@rola/ui/components";
import { AddBankAccountFormValues } from "../data";

function AddBankAccount({
  loading,
  form: addBankAccountForm,
  handleAddBankAccount,
}: {
  loading: boolean;
  form: UseFormReturn<AddBankAccountFormValues, any, undefined>;
  handleAddBankAccount: (values: AddBankAccountFormValues) => Promise<void>;
}) {
  return (
    <Container>
      <form onSubmit={addBankAccountForm.handleSubmit(handleAddBankAccount)}>
        <Form {...addBankAccountForm}>
          <Title
            order={5}
            align="left"
            className="text-brand mb-4 font-semibold uppercase"
          >
            Datos Bancarios
          </Title>

          <Container className="grid gap-4 pb-4 lg:grid-cols-2">
            <FormField
              control={addBankAccountForm.control}
              name="bankName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Banco</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Banco"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Container>

          <Container className="grid gap-4 pb-12 lg:grid-cols-2">
            <FormField
              control={addBankAccountForm.control}
              name="accountHolderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>
                    Nombre del titular de la cuenta
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Nombre del titular"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={addBankAccountForm.control}
              name="accountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Número de cuenta</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Número de cuenta"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Container>

          <Container className="mt-12 text-center">
            <Button type="submit" loading={loading}>
              Actualizar mi cuenta de banco
            </Button>
          </Container>
        </Form>
      </form>
    </Container>
  );
}

export { AddBankAccount };
