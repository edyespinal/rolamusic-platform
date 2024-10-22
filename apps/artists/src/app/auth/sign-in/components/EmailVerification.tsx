"use client";

import {
  Button,
  Container,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Text,
} from "@rola/ui/components";
import { EmailAuthProps } from "../types";
import React from "react";

function EmailVerification({
  form,
  isLoading,
  handleVerification,
  handleResendVerification,
}: Omit<EmailAuthProps, "handleSignInTypeChange" | "handleEmailAuth"> & {
  handleResendVerification: () => void;
}) {
  const [resendAvailable, setResendAvailable] = React.useState(false);
  const [seconds, setSeconds] = React.useState(60);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 0) {
          setResendAvailable(true);
          clearInterval(timer);

          return prev;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [resendAvailable]);

  function resendVerification() {
    if (!resendAvailable) {
      return;
    }

    handleResendVerification();
    setSeconds(60);
    setResendAvailable(false);
  }

  return (
    <Container size="sm" className="space-y-4">
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(handleVerification)}
        >
          <Text className="text-center">
            Te hemos enviado un correo electrónico con un código de verificación
            de un solo uso.
          </Text>

          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="mx-auto text-center">
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>
                  Por favor, introduce el código.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-center">
            <Button type="submit" loading={isLoading}>
              Verificar
            </Button>
          </div>
        </form>
      </Form>

      <div className="py-16 text-center">
        <Text>¿No has recibido el correo electrónico?</Text>
        <Button
          variant="link"
          disabled={!resendAvailable}
          onClick={resendVerification}
        >
          Reenviar código
        </Button>
        <Text className="text-gray text-xs opacity-80">
          {!resendAvailable &&
            `(${seconds} segundos antes de poder reenviar el código)`}
        </Text>
      </div>
    </Container>
  );
}

export { EmailVerification };
