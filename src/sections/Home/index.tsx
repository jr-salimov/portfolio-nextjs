"use client";
import Image from "next/image";
import styles from "./Home.module.scss";
import { useTranslations } from "next-intl";
import { WordToLetters } from "@/components/WordToLetters";
import arrow from "@/images/arrow.svg";
import React from "react";
import { Computer } from "@/images/Computer";

export function Home() {
  const home = useTranslations("Home");
  return (
    <section className={styles.wrapper} id="home">
      <div className={styles.content}>
        <span className={styles.job}>
          <WordToLetters words={home("title")} />
        </span>
        <span className={styles.description}>{home("description")}</span>
        <span className={styles.link}>
          <a href="#about" className={styles.aboutMe}>
            {home("nextPage")}
            <Image src={arrow} alt="arrow" className={styles.arrow} />
          </a>
        </span>
      </div>
      <div className={styles.computer}>
        <Computer />
      </div>
    </section>
  );
}
