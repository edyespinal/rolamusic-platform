"use client";

import { Container, Loader } from "@rola/ui/components";

function AdminLoading() {
  return (
    <Container className="h-full flex items-center justify-center">
      <Loader />
    </Container>
  );
}

export default AdminLoading;
