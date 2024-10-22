import React from "react";
import { Container, Loader } from "@rola/ui/components";

function Loading() {
  return (
    <Container className="grid h-96 place-items-center">
      <Loader size="xl" />
    </Container>
  );
}

export default Loading;
