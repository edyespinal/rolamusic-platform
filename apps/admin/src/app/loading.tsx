import { Container, Loader } from "@rola/ui/components";

export default function Loading() {
  return (
    <Container className="flex items-center justify-center h-screen">
      <Loader />
    </Container>
  );
}
