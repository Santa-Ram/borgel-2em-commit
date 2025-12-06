import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = { children: ReactNode };

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-light">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}


