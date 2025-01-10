import React from "react";
import Link from "next/link";
import { Button } from "@rola/ui/components";
import { ArrowLeftIcon } from "@rola/ui/icons";

function BackButton() {
  return (
    <Link href="/" className="pb-8">
      <Button variant="outline" size="icon">
        <ArrowLeftIcon />
      </Button>
    </Link>
  );
}

export { BackButton };
