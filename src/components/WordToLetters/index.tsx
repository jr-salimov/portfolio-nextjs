"use client";
import styles from "./WordToLetters.module.scss";

type WordToLettersProps = {
  words: string;
};

export function WordToLetters(props: WordToLettersProps) {
  return (
    <>
      {props.words.split("").map((char: string, id: number) => {
        const className = char !== " " ? styles.eachLetter : styles.gap;

        return (
          <span key={id} className={className}>
            {char}
          </span>
        );
      })}
    </>
  );
}
