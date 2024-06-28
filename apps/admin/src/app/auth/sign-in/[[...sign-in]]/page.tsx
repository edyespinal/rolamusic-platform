import { SignIn } from "@clerk/nextjs";
import { Container } from "@rola/ui/components";

function SignInPage() {
  return (
    <Container className="flex items-center justify-center h-svh">
      <SignIn />
    </Container>
  );
}

export default SignInPage;
