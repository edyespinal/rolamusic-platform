"use client";

import React from "react";
import { MobileNavigation } from "./Mobile";
import { DesktopNavigation } from "./Desktop";

function Navigation() {
  return (
    <div>
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
}

export { Navigation };
