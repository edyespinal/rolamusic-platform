import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Text,
  Title,
} from "@rola/ui/components";
import { CreateAccountFormValues } from "../data";
import { UseFormReturn } from "react-hook-form";
import { phoneCountryCodes, states, statesOptions } from "@rola/services/utils";

function CreateAccount({
  loading,
  form: createAccountForm,
  handleCreateAccount,
}: {
  loading: boolean;
  form: UseFormReturn<CreateAccountFormValues, any, undefined>;
  handleCreateAccount: (values: CreateAccountFormValues) => Promise<void>;
}) {
  return (
    <Container>
      <form onSubmit={createAccountForm.handleSubmit(handleCreateAccount)}>
        <Form {...createAccountForm}>
          <Text className="pb-4">
            Introduce tus datos fiscales, datos bancarios ya que son necesarios
            para recibir tus pagos.
          </Text>

          <Title
            order={5}
            align="left"
            className="text-brand mb-4 font-semibold uppercase"
          >
            Datos de representante
          </Title>

          <Container className="grid grid-cols-2 gap-4 pb-12">
            <FormField
              control={createAccountForm.control}
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
              control={createAccountForm.control}
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
              control={createAccountForm.control}
              name="documentType"
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
              control={createAccountForm.control}
              name="documentNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Número de documento</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Número de documento"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={createAccountForm.control}
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
              control={createAccountForm.control}
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
                        placeholder="Número de teléfono"
                        required
                        {...field}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={createAccountForm.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Fecha de nacimiento</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      required
                      placeholder="Fecha de nacimiento"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </Container>

          <Container className="grid grid-cols-2 gap-4 pb-12">
            <FormField
              control={createAccountForm.control}
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
              control={createAccountForm.control}
              name="address.line2"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Número</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Número"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={createAccountForm.control}
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
              control={createAccountForm.control}
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
              control={createAccountForm.control}
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
            Website
          </Title>

          <Container className="grid grid-cols-2 gap-4 pb-12">
            <FormField
              control={createAccountForm.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Sitio web</FormLabel>
                  <FormControl>
                    <Input type="text" required {...field} />
                  </FormControl>
                  <FormDescription>
                    URL de tu sitio web. Si no tienes una web, puedes compartir
                    un perfil de redes sociales.
                  </FormDescription>
                </FormItem>
              )}
            />
          </Container>

          <Container className="mt-12 text-center">
            <Button type="submit" loading={loading}>
              Siguiente
            </Button>
          </Container>
        </Form>
      </form>
    </Container>
  );
}

export { CreateAccount };
