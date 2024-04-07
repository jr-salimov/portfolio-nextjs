"use client";
import Image from "next/image";
import Link from "next/link";
import { WordToLetters } from "@/components/WordToLetters";
import { INSTAGRAM_LINK, GMAIL } from "@/links";
import styles from "./Contacts.module.scss";
import mail from "@/images/mail.svg";
import { useTranslations } from "next-intl";

export function Contacts() {
  const contacts = useTranslations("Contacts");

  return (
    <section className={styles.wrapper} id="contacts">
      <div className={styles.title}>
        <WordToLetters words={contacts("title")} />
      </div>

      <div className={styles.description}>
        {contacts("description")}
        <Link
          href={INSTAGRAM_LINK}
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          Instagram
        </Link>
        <Link
          href={`mailto:${GMAIL}`}
          target="_blank"
          className={styles.email}
          rel="noreferrer"
        >
          <div>
            <Image src={mail} alt="mail_logo" className={styles.mailIcon} />
          </div>
          <div>{GMAIL}</div>
        </Link>
      </div>
    </section>
  );
}
