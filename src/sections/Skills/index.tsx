"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Skills.module.scss";
import { useTranslations } from "next-intl";
import { WordToLetters } from "@/components/WordToLetters";
import { LINKEDIN_LINK } from "@/links";
import html5 from "@/images/Skills/html5.svg";
import css3 from "@/images/Skills/css3.svg";
import figma from "@/images/Skills/figma.svg";
import sass from "@/images/Skills/sass.svg";
import js from "@/images/Skills/js.svg";
import git from "@/images/Skills/git.svg";
import react from "@/images/Skills/reactjs.svg";
import node from "@/images/Skills/nodejs.svg";

interface LangArr {
  src: string;
  name: string;
  href: string;
}

const langArr: LangArr[] = [
  {
    src: html5,
    name: "html5",
    href: "https://www.w3.org/TR/2011/WD-html5-20110405/",
  },
  {
    src: css3,
    name: "css3",
    href: "https://www.w3.org/TR/css-2018/",
  },
  {
    src: figma,
    name: "figma",
    href: "https://help.figma.com/",
  },
  {
    src: sass,
    name: "sass",
    href: "https://sass-lang.com/documentation/",
  },
  {
    src: js,
    name: "js",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
  },
  {
    src: git,
    name: "git",
    href: "https://git-scm.com/doc",
  },
  {
    src: react,
    name: "react",
    href: "https://react.dev/",
  },
  {
    src: node,
    name: "node",
    href: "https://nodejs.org/en/docs",
  },
];

export function Skills() {
  const skills = useTranslations("Skills");

  return (
    <section className={styles.wrapper} id="skills">
      <div className={styles.skillsText}>
        <div className={styles.small}>{skills("quote")}</div>
        <div className={styles.title}>
          <WordToLetters words={skills("title")} />
        </div>
        <div className={styles.description}>
          {skills("description1")}
          <Link
            href={LINKEDIN_LINK}
            className={styles.link}
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </Link>{" "}
          {skills("description2")}
        </div>
      </div>
      <div className={styles.langs}>
        {langArr.map((lang, id) => (
          <div id={styles.eachLang} className={styles.skillEl} key={id}>
            <Link href={lang.href}>
              <Image
                src={lang.src}
                alt={lang.name}
                className={styles.langIcon}
              />
              <div className={styles.langName}>{lang.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
