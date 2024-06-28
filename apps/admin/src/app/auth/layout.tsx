import React from "react";
import { LayoutProps } from "@typings/globals";

function AuthLayout(props: Readonly<LayoutProps>) {
  const { children } = props;

  return <main>{children}</main>;
}

export default AuthLayout;
