"use client";

import React from "react";
import { DesktopNavigation } from "./Desktop";
import { MobileNavigation } from "./Mobile";

function Navigation() {
  return (
    <div>
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
}

export { Navigation };
