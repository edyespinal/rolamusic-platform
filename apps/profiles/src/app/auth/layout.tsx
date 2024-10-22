import React from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] overflow-x-hidden bg-[url('/static/img/bg/pedals-1.jpg')] bg-cover">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default AuthLayout;
