import { Container, Icon } from "@rola/ui/components";

export default function Loading() {
  return (
    <Container className="flex items-center justify-center h-screen">
      <Icon name="loader-2" size={36} className="animate-spin text-brand" />
    </Container>
  );
}
