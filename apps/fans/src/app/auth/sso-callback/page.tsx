import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";
import { Container, Loader, Text } from "@rola/ui/components";

function SSOCallback({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <Container size="sm" className="flex flex-col items-center gap-4 py-24">
      <Loader size="xl" />
      <div className="text-center">
        <Text>Estamos creando tu cuenta...</Text>
        <Text>Esto puede tardar unos segundos</Text>
      </div>
      <AuthenticateWithRedirectCallback
        signUpForceRedirectUrl={`/auth/profile-creation?redirect_url=${searchParams.redirect_url}`}
      />
    </Container>
  );
}

export default SSOCallback;
