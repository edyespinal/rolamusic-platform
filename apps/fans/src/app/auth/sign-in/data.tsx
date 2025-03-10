"use client";

import React from "react";
import { LoginType, LoginValues } from "./types";
import { useForm } from "react-hook-form";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@rola/ui/components";
import { XIcon } from "@rola/ui/icons";

const useSignInData = () => {
  const [loginType, setLoginType] = React.useState<LoginType>("google");
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url");

  const { toast } = useToast();
  const { signIn, setActive } = useSignIn();
  const { signUp } = useSignUp();

  const form = useForm<LoginValues>({
    defaultValues: {
      email: "",
      password: "",
      code: "",
    },
  });

  function handleSignInTypeChange(type: LoginType) {
    if (type === loginType) {
      return;
    }

    form.reset();
    setLoginType(type);
  }

  function handleGoogleSignIn() {
    setIsLoading(true);

    if (!signIn) {
      return;
    }

    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: `/auth/sso-callback?redirect_url=${redirectUrl}`,
      redirectUrlComplete: redirectUrl || "/",
    });
  }

  async function handleEmailSignIn(values: LoginValues) {
    if (!signIn) {
      return;
    }

    try {
      setIsLoading(true);

      const result = await signIn.create({
        identifier: values.email,
        password: values.password,
        strategy: "password",
      });

      if (result.status === "complete") {
        await setActive({
          session: result.createdSessionId,
        });

        router.push(searchParams.get("redirect_url") ?? "/");
      }
    } catch (error: any) {
      setIsLoading(false);

      if (
        error.message ===
        "You're currently in single session mode. You can only be signed into one account at a time."
      ) {
        toast({
          title: "Error",
          description: "Ya tienes una sesión iniciada",
          variant: "destructive",
          icon: <XIcon />,
        });

        return;
      }

      toast({
        title: "Error",
        description: "No se pudo iniciar sesión",
        variant: "destructive",
        icon: <XIcon />,
      });
    }
  }

  async function handleResendVerification() {
    if (!signUp) {
      return;
    }

    try {
      await signUp.prepareVerification({
        strategy: "email_code",
      });

      toast({
        title: "Enviado",
        description: "Se ha enviado un nuevo código de verificación",
      });
    } catch (error: any) {
      console.error(error);

      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  }

  async function handleEmailSignUp(values: LoginValues) {
    if (!signUp) {
      return;
    }

    try {
      setIsLoading(true);

      await signUp.create({
        emailAddress: values.email,
        password: values.password,
      });

      await signUp.prepareVerification({
        strategy: "email_code",
      });

      setLoginType("verification");
      setIsLoading(false);
    } catch (error: any) {
      const errorMessage =
        error.errors[0].code === "form_password_pwned"
          ? "Contraseña insegura. Por favor, elige otra."
          : "No se pudo realizar el registro";

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });

      setIsLoading(false);
    }
  }

  async function handleVerification(values: LoginValues) {
    if (!signUp || !setActive) {
      return;
    }

    try {
      setIsLoading(true);

      const { createdUserId } = await signUp.attemptVerification({
        strategy: "email_code",
        code: values.code,
      });

      if (!createdUserId) {
        throw new Error("No se pudo verificar el código");
      }

      await setActive({
        session: signUp.createdSessionId,
      });

      router.push(`/auth/profile-creation?redirect_url=${redirectUrl}`);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "No se pudo verificar el código",
        variant: "destructive",
      });

      setIsLoading(false);
    }
  }

  return {
    form,
    loginType,
    isLoading,
    handleSignInTypeChange,
    handleGoogleSignIn,
    handleEmailSignIn,
    handleEmailSignUp,
    handleVerification,
    handleResendVerification,
  };
};

export { useSignInData };
