"use client";
import styles from "./About.module.scss";
import { useTranslations } from "next-intl";
import { WordToLetters } from "@/components/WordToLetters";

export function About() {
  const about = useTranslations("About");

  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.title}>
        <span className={styles.name}>
          <WordToLetters words={about("greeting")} />
        </span>
        <br />

        <span className={styles.position}>
          <WordToLetters words={about("job")} />
        </span>

        <br />
        <span className={styles.small}>{about("position")}</span>
      </div>{" "}
      <div className={styles.description}>{about("description")}</div>
    </section>
  );
}
