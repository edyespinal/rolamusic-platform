import React from "react";
import { Container } from "@rola/ui/components";
import { cn } from "@rola/tailwind-config/utils";

function PageHeader({
  background,
  children,
}: {
  background?: string;
  children?: React.ReactNode;
}) {
  return (
    <Container
      className={cn(
        background ? background : "bg-background",
        "h-[50vh] w-full bg-cover bg-center bg-no-repeat lg:-mt-20",
        "3xl:min-h-[800px]"
      )}
    >
      {children}
    </Container>
  );
}

export { PageHeader };
