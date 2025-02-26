"use client";

import React from "react";
import Link from "next/link";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  PasswordInput,
  Text,
  Title,
} from "@rola/ui/components";
import { ArrowLeftIcon } from "@rola/ui/icons";
import { useResetPasswordData } from "./data";

function ResetPasswordPageUI() {
  const { passwordEnabled, form, resetPassword, loading } =
    useResetPasswordData();

  return (
    <Container size="sm" className="px-6 py-12">
      <Link href="/">
        <Button variant="outline" size="icon">
          <ArrowLeftIcon />
        </Button>
      </Link>

      <Title order={2} underline className="py-6">
        Restablecer contraseña
      </Title>

      {!passwordEnabled ? (
        <Container className="flex flex-col gap-4">
          <Text>
            Si iniciaste sesión con Google, no es posible restablecer tu
            contraseña. Para acceder, usa la opción 'Continuar con Google'
          </Text>
        </Container>
      ) : (
        <form onSubmit={form.handleSubmit(resetPassword)}>
          <Form {...form}>
            <Container className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Contraseña actual</FormLabel>
                    <FormControl>
                      <PasswordInput required {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required>Nueva contraseña</FormLabel>
                    <FormControl>
                      <PasswordInput required {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </Container>

            <Container className="pt-8 text-center">
              <Button type="submit" size="sm" loading={loading}>
                Restablecer contraseña
              </Button>
            </Container>
          </Form>
        </form>
      )}
    </Container>
  );
}

export { ResetPasswordPageUI };
