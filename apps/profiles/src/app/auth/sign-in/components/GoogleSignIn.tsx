"use client";

import Image from "next/image";
import { Button, Container, Text } from "@rola/ui/components";
import { MailIcon } from "@rola/ui/icons";
import { GoogleSignInProps } from "../types";

function GoogleSignIn({
  handleGoogleSignIn: handleGoogleLogin,
  handleSignInTypeChange: handleLoginTypeChange,
}: GoogleSignInProps) {
  return (
    <Container>
      <div className="mx-auto flex w-80 flex-col gap-4">
        <Button variant="outline" onClick={handleGoogleLogin}>
          <Image
            src={"/static/img/icons/google-icon.svg"}
            width={14}
            height={14}
            alt="Google logo"
            className="mr-2"
          />
          Continuar con Google
        </Button>
        <Button onClick={() => handleLoginTypeChange("register")}>
          <MailIcon className="mr-2" />
          Continuar con email
        </Button>
      </div>

      <div className="text-brand py-16 text-center">
        <Text>¿Ya tienes una cuenta?</Text>
        <Button
          variant="outline"
          onClick={() => handleLoginTypeChange("email")}
        >
          Iniciar sesión
        </Button>
      </div>
    </Container>
  );
}

export { GoogleSignIn };
