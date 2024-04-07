"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.scss";
import { WordToLetters } from "@/components/WordToLetters";
import arrow from "@/images/arrow.svg";
import { useTranslations } from "next-intl";

export function Projects() {
  const projects = useTranslations("Projects");

  return (
    <section className={styles.wrapper} id="projects">
      <div className={styles.experience}>
        <WordToLetters words={projects("title")} />
      </div>
      <div className={styles.description}>{projects("description")}</div>
      <div className={styles.link}>
        <Link href="#home" className={styles.seeProjects}>
          <div>{projects("projects")}</div>
          <Image src={arrow} alt="arrow" className={styles.arrow} />
        </Link>
      </div>
    </section>
  );
}
