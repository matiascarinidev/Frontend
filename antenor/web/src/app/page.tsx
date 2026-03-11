"use client";
import { NavbarProvider } from "@/components/landing/NavbarContext";
import Navbar from "@/components/landing/Navbar";
import PageLayout from "@/components/landing/PageLayout";
import AboutSection from "@/components/landing/AboutSection";
import ReserveForm from "@/components/landing/ReserveSection";
import MenuSection from "@/components/landing/MenuSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import CommentSection from "@/components/landing/CommentSection";
import { useRef, useEffect } from "react";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navbar = navbarRef.current;
    const main = mainRef.current;

    if (!navbar || !main) return;

    const observer = new ResizeObserver(() => {
      const navbarHeight = navbar.offsetHeight;
      main.style.marginTop = `-${navbarHeight}px`;
    });

    observer.observe(navbar);
    return () => observer.disconnect();
  }, []);

  return (
    <NavbarProvider>
      <PageLayout>
        <Navbar />
        <main ref={mainRef} className="flex flex-col">
          <AboutSection />
          <MenuSection />
          <CommentSection />
          <ReserveForm />
          <ContactSection />
        </main>
        <Footer />
      </PageLayout>
    </NavbarProvider>
  );
}
