import { Container, Loader } from "@rola/ui/components";

function Loading() {
  return (
    <Container className="flex items-center justify-center h-screen">
      <Loader size="xl" />
    </Container>
  );
}

export default Loading;
