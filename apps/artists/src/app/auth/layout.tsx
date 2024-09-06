import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="grid h-screen overflow-x-hidden grid-rows-[auto_1fr_auto] bg-[url('/static/img/bg/pedals-1.jpg')] bg-cover">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default AuthLayout;
