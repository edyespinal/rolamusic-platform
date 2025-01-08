import React from "react";
import Link from "next/link";
import { Button, Icon } from "@rola/ui/components";

function BackButton() {
  return (
    <Link href="/" className="pb-8">
      <Button variant="outline" size="icon">
        <Icon name="chevron-left" size={26} />
      </Button>
    </Link>
  );
}

export { BackButton };
