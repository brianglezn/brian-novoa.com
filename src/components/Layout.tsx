import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LanguageSelector from "./LanguageSelector";

import "./Layout.scss";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <LanguageSelector />
      <Header />
      <div className="layout-container">{children}</div>
      <Footer />
    </>
  );
}
