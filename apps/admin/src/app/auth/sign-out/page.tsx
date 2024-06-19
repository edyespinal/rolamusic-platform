"use client";

import { SignOutButton } from "@clerk/nextjs";
import { Container } from "@rola/ui/components";

function SignOut() {
  return (
    <Container className="flex items-center justify-center h-svh">
      <SignOutButton redirectUrl="/auth/sign-in" />
    </Container>
  );
}

export default SignOut;
