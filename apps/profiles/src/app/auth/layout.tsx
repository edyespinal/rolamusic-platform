import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="-mt-20 grid h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden bg-[url('/static/img/bg/pedals-1.jpg')] bg-cover">
      <main>{children}</main>
    </div>
  );
}

export default AuthLayout;
