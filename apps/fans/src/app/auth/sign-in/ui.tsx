"use client";

import React from "react";
import Image from "next/image";
import { Container, Title, Underline } from "@rola/ui/components";
import { useSignInData } from "./data";
import { GoogleSignIn } from "./components/GoogleSignIn";
import { EmailSignIn } from "./components/EmailSignIn";
import { EmailSignUp } from "./components/EmailSignUp";
import { EmailVerification } from "./components/EmailVerification";
import Background from "@assets/img/bg/pedals-1.jpg";

function LoginUI() {
  const {
    form,
    loginType,
    handleSignInTypeChange,
    handleGoogleSignIn,
    handleEmailSignIn,
    handleEmailSignUp,
    handleVerification,
    handleResendVerification,
    isLoading,
  } = useSignInData();

  return (
    <Container size="sm" className="flex flex-col pt-24">
      <Image
        src={Background}
        alt="Background"
        className="absolute inset-0 z-[-1] size-full object-cover"
        fill
      />
      <div className="mb-12">
        <Title order={2}>Mi cuenta</Title>
        <Underline />
      </div>

      {loginType === "google" ? (
        <GoogleSignIn
          handleSignInTypeChange={handleSignInTypeChange}
          handleGoogleSignIn={handleGoogleSignIn}
        />
      ) : null}

      {loginType === "register" ? (
        <EmailSignUp
          form={form}
          isLoading={isLoading}
          handleSignInTypeChange={handleSignInTypeChange}
          handleEmailAuth={handleEmailSignUp}
        />
      ) : null}

      {loginType === "email" ? (
        <EmailSignIn
          form={form}
          isLoading={isLoading}
          handleSignInTypeChange={handleSignInTypeChange}
          handleEmailAuth={handleEmailSignIn}
        />
      ) : null}

      {loginType === "verification" ? (
        <EmailVerification
          form={form}
          isLoading={isLoading}
          handleVerification={handleVerification}
          handleResendVerification={handleResendVerification}
        />
      ) : null}
    </Container>
  );
}

export { LoginUI };
