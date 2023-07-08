import dynamic from "next/dynamic";
import React, { ReactNode } from "react";
const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <section>
      {/*  overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60 */}
      <main className="h-[100vh] font-bodyFont flex flex-col justify-between gap-y-4 lg:gap-y-24 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Header />
        {children}
        <Footer />
      </main>
    </section>
  );
};
