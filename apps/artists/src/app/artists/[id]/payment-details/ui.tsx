"use client";

import React from "react";
import { Artist, ArtistPayment } from "@rola/services/schemas";
import {
  Alert,
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Text,
  Title,
  Underline,
} from "@rola/ui/components";
import { useArtistPaymentDetailsData } from "./data";
import { provincesOptions } from "@rola/services/utils";

function ArtistPaymentDetailsUI({
  artist,
  payment,
}: {
  artist: Artist;
  payment: ArtistPayment;
}) {
  const { form, handleSubmit, isLoading } = useArtistPaymentDetailsData(
    artist.id,
    payment
  );

  return (
    <Container className="pb-24">
      <Container className="pb-12">
        <Title order={2} align="left">
          Datos bancarios y fiscales
        </Title>
        <Underline align="left" />
      </Container>

      {!artist.active && (
        <Container className="pb-8">
          <Alert variant="destructive" title="Artista inactivo">
            Este artista no está activo en la plataforma.
          </Alert>
        </Container>
      )}

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Form {...form}>
          <Text className="pb-4">
            Introduce tus datos fiscales, datos bancarios ya que son necesarios
            para recibir tus pagos.
          </Text>

          <Title
            order={5}
            align="left"
            className="text-brand mb-4 font-semibold uppercase"
          >
            Datos Fiscales
          </Title>

          <Container className="pb-8">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Mi cuenta es de:</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      className="flex gap-x-12"
                    >
                      <div className="flex gap-x-2">
                        <RadioGroupItem value="particular" id="particular" />
                        <Label htmlFor="particular">Particular</Label>
                      </div>
                      <div className="flex gap-x-2">
                        <RadioGroupItem value="autonomo" id="autonomo" />
                        <Label htmlFor="autonomo">Autónomo</Label>
                      </div>
                      <div className="flex gap-x-2">
                        <RadioGroupItem value="company" id="company" />
                        <Label htmlFor="company">Empresa</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
          </Container>

          <Container className="grid grid-cols-2 gap-4 pb-12">
            <FormField
              control={form.control}
              name="document.type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Tipo de documento</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
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
              control={form.control}
              name="document.number"
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
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Nombre completo o razón social</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Nombre completo o razón social"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
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
              control={form.control}
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

            <FormField
              control={form.control}
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
              control={form.control}
              name="address.province"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Provincia</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Provincia" />
                      </SelectTrigger>
                      <SelectContent>
                        {provincesOptions.map((province) => (
                          <SelectItem
                            key={province.value}
                            value={province.value}
                          >
                            {province.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>País</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="País" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ES">España</SelectItem>
                      </SelectContent>
                    </Select>
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

          <Container className="grid gap-4">
            <FormField
              control={form.control}
              name="paymentPreferences.country"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel required>País de la cuenta</FormLabel>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="País de la cuenta" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ES">España</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="paymentPreferences.type"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel required>Método para recibir tus pagos:</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      className="flex gap-x-12"
                    >
                      <div className="flex gap-x-2">
                        <RadioGroupItem
                          value="bankTransfer"
                          id="bankTransfer"
                        />
                        <Label htmlFor="bankTransfer">Cuenta bancaria</Label>
                      </div>
                      <div className="flex gap-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />

            {form.watch("paymentPreferences.type") === "bankTransfer" ? (
              <Container className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="paymentPreferences.details.bank"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel required>Nombre del banco</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="IBAN"
                          required
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="paymentPreferences.details.accountHolder"
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
                  control={form.control}
                  name="paymentPreferences.details.accountNumber"
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
            ) : (
              <Container className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="paymentPreferences.details.email"
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
              </Container>
            )}
          </Container>

          <Container className="mt-12 text-center">
            <Button type="submit" loading={isLoading}>
              Actualizar
            </Button>
          </Container>
        </Form>
      </form>
    </Container>
  );
}

export { ArtistPaymentDetailsUI };
