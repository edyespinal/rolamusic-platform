"use client";

import {
  Button,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Icon,
  Input,
} from "@rola/ui/components";
import { EmailAuthProps } from "../types";

function EmailSignIn({
  form,
  isLoading,
  handleSignInTypeChange,
  handleEmailAuth: handleEmailSignIn,
}: Omit<EmailAuthProps, "handleVerification">) {
  return (
    <Container size="sm" className="space-y-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleSignInTypeChange("google")}
      >
        <Icon name="arrow-left" />
      </Button>

      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(handleEmailSignIn)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Contraseña" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-center pt-8">
            <Button type="submit" loading={isLoading}>
              Iniciar sesión
            </Button>
          </div>
        </form>
      </Form>
    </Container>
  );
}

export { EmailSignIn };
