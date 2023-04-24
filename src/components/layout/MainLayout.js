import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header section  */}
      <Header />

      {/* main content area  */}
      <div className="main">{children}</div>

      {/* footer section  */}
      <Footer />
    </div>
  );
};
