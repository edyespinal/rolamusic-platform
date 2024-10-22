import React from "react";
import { useForm } from "react-hook-form";
import { ArtistPayment } from "@rola/services/schemas";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Title,
} from "@rola/ui/components";
import { phoneCountryCodes, states, statesOptions } from "@rola/services/utils";

function EditPaymentDetails({
  loading,
  form: paymentDetailsForm,
  handleUpdatePaymentDetails,
}: {
  loading: boolean;
  form: ReturnType<typeof useForm<ArtistPayment>>;
  handleUpdatePaymentDetails: (values: ArtistPayment) => Promise<void>;
}) {
  return (
    <Container>
      <form
        onSubmit={paymentDetailsForm.handleSubmit(handleUpdatePaymentDetails)}
      >
        <Form {...paymentDetailsForm}>
          <Title
            order={5}
            align="left"
            className="text-brand mb-4 font-semibold uppercase"
          >
            Datos de representante
          </Title>

          <Container className="grid gap-4 pb-12 lg:grid-cols-2">
            <FormField
              control={paymentDetailsForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Nombre</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Nombre"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={paymentDetailsForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Apellidos</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Apellidos"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={paymentDetailsForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={paymentDetailsForm.control}
              name="phone.number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Teléfono</FormLabel>
                  <FormControl>
                    <div className="flex gap-4">
                      <Select defaultValue="+34">
                        <SelectTrigger className="w-1/5">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {phoneCountryCodes.map((item) => (
                            <SelectItem key={item.code} value={item.code}>
                              {item.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        type="tel"
                        placeholder="Teléfono"
                        required
                        {...field}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={paymentDetailsForm.control}
              name="document.type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Tipo de documento</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Tipo de documento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dni">DNI</SelectItem>
                        <SelectItem value="nie">NIE</SelectItem>
                        <SelectItem value="nif">NIF</SelectItem>
                        <SelectItem value="cif">CIF</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={paymentDetailsForm.control}
              name="document.number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Número de documento</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Número de documento"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={paymentDetailsForm.control}
              name="address.street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Calle</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Calle"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={paymentDetailsForm.control}
              name="address.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Ciudad</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Ciudad"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={paymentDetailsForm.control}
              name="address.state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Provincia</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    required
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue>{states[field.value]}</SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {statesOptions.map((state) => (
                        <SelectItem value={state.value} key={state.value}>
                          {state.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={paymentDetailsForm.control}
              name="address.postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Código postal</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Código postal"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Container>

          <Title
            order={5}
            align="left"
            className="text-brand mb-4 font-semibold uppercase"
          >
            Datos Bancarios
          </Title>
          <Container className="grid gap-4 pb-4 lg:grid-cols-2">
            <FormField
              control={paymentDetailsForm.control}
              name="paymentPreferences.bank.bankName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre del banco</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Banco"
                      disabled
                      value={field.value}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Container>
          <Container className="grid gap-4 pb-4 lg:grid-cols-2">
            <FormField
              control={paymentDetailsForm.control}
              name="paymentPreferences.bank.accountHolder"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Titular de la cuenta</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Titular de la cuenta"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={paymentDetailsForm.control}
              name="paymentPreferences.bank.accountNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número de cuenta</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Número de cuenta"
                      disabled
                      value={field.value}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Container>

          <Container className="mt-12 text-center">
            <Button type="submit" loading={loading}>
              Actualizar datos
            </Button>
          </Container>
        </Form>
      </form>
    </Container>
  );
}

export { EditPaymentDetails };
