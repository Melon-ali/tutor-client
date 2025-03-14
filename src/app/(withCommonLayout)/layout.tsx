import Foote from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">{children}</main>
      <Foote />
    </>
  );
};

export default CommonLayout;
