"use client";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import styles from "./Languages.module.scss";
import Link from "next/link";

const isSwitched = atomWithStorage("english", true);
const langChoice = atomWithStorage("language", "EN");

export function LangSwitcher() {
  const [switched, setSwitched] = useAtom(isSwitched);
  const [name, setName] = useAtom(langChoice);

  const inEnglish = () => {
    setSwitched(!switched);
    setName("EN");
  };

  const inRussian = () => {
    setSwitched(!switched);
    setName("RU");
  };

  return (
    <div className={styles.langChoice}>
      {switched ? (
        <Link href="/en" className={styles.link}>
          <button
            className={styles.language}
            id={styles.english}
            onClick={inEnglish}
          >
            {name}
          </button>
        </Link>
      ) : (
        <Link href="/ru" className={styles.link}>
          <button
            className={styles.language}
            id={styles.english}
            onClick={inRussian}
          >
            {name}
          </button>
        </Link>
      )}
    </div>
  );
}
