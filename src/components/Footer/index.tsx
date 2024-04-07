"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

import {
  GITHUB_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  DRIBBLE_LINK,
  DISCORD_LINK,
} from "../../links";
import github from "../../images/Contacts/github.svg";
import instagram from "../../images/Contacts/instagram.svg";
import linkedin from "../../images/Contacts/linkedin.svg";
import dribble from "../../images/Contacts/dribble.svg";
import discord from "../../images/Contacts/discord.svg";

interface IconsArr {
  href: string;
  src: string;
  alt: string;
}

const iconsArr: IconsArr[] = [
  { href: GITHUB_LINK, src: github, alt: "github" },
  { href: INSTAGRAM_LINK, src: instagram, alt: "instagram" },
  { href: LINKEDIN_LINK, src: linkedin, alt: "linkedin" },
  { href: DRIBBLE_LINK, src: dribble, alt: "dribble" },
  { href: DISCORD_LINK, src: discord, alt: "discord" },
];
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        {iconsArr.map((icon, id) => (
          <Link href={icon.href} key={id}>
            <Image src={icon.src} alt={icon.alt} className={styles.icon} />
          </Link>
        ))}
      </div>
      <div className={styles.copyright}>&copy; 2024. Atoullo Salimov</div>
    </footer>
  );
}
