import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function AuthLayout(props: Readonly<LayoutProps>) {
  const { children } = props;

  return <main>{children}</main>;
}

export default AuthLayout;
