"use client";
import styles from "./Layout.module.scss";
import { Home } from "@/sections/Home";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Contacts } from "@/sections/Contacts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Layout({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.sections}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}
