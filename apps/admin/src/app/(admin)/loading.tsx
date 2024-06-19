"use client";

import { Container, Icon } from "@rola/ui/components";

function AdminLoading() {
  return (
    <Container className="h-full flex items-center justify-center">
      <Icon name="loader-2" size={36} className="animate-spin text-brand" />
    </Container>
  );
}

export default AdminLoading;
