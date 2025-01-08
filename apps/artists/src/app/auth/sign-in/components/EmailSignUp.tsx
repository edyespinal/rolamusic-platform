"use client";

import {
  Button,
  Checkbox,
  Container,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Icon,
  Input,
  PasswordInput,
  Text,
} from "@rola/ui/components";
import { EmailAuthProps } from "../types";

function EmailSignUp({
  form,
  isLoading,
  handleSignInTypeChange,
  handleEmailAuth,
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
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(handleEmailAuth)}
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
                    required
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
                  <PasswordInput placeholder="Contraseña" required {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="acceptTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-x-2 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    required
                  />
                </FormControl>

                <FormLabel>
                  <span>
                    He leído y acepto la{" "}
                    <a
                      href="https://help.rolamusic.app/privacy-policy"
                      className="font-bold hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Política de Privacidad
                    </a>{" "}
                    y el{" "}
                    <a
                      href="https://help.rolamusic.app/legal-notice"
                      className="font-bold hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Aviso Legal
                    </a>{" "}
                    de ROLA.
                  </span>
                </FormLabel>
              </FormItem>
            )}
          />

          <Text size="sm" className="text-gray-light text-justify">
            ROLA MUSIC propietaria del dominio web rolamusic.app y en virtud del
            que establece el Reglamento General de Protección de Datos
            (UE1679/2016) Te informamos que tratamos los datos que nos facilitas
            en el presente formulario para poder hacer efectiva tu solicitud de
            información. Los datos proporcionados se conservarán mientras se
            realiza el procesamiento de tu solicitud y se te da respuesta.
            Tienes derecho a acceder a tus datos personales, rectificar los
            inexactos o solicitar su supresión cuando ya no sean necesarios.
            Para cualquier consulta relacionada con tus datos personales puedes
            enviar un correo a: hola@rolamusic.app
          </Text>

          <div className="pt-8 text-center">
            <Button type="submit" loading={isLoading}>
              Crear cuenta de artista
            </Button>
          </div>
        </form>
      </Form>
    </Container>
  );
}

export { EmailSignUp };
