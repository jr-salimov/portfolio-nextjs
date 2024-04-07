"use client";
import Image from "next/image";
import Link from "next/link";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { LangSwitcher } from "../LangSwitcher/index";
import { Menu } from "../Menu/index";
import { GITHUB_LINK } from "../../links";
import styles from "./Header.module.scss";
import logo from "../../images/logo.png";
import github from "../../images/github.svg";

const themeAtom = atomWithStorage("theme", true);

export function Header() {
  //Changing theme
  const [themeChanged, setThemeChanged] = useAtom(themeAtom);
  const onSwitch = () => {
    setThemeChanged(!themeChanged);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <label>
          <input
            className={styles.switchInput}
            type="checkbox"
            role="switch"
            onClick={onSwitch}
            checked={themeChanged}
            id="themeSwitcher"
            readOnly
          />
          <Image
            src={logo}
            alt="logo"
            className={styles.logoIcon}
            title="Change theme"
          />
        </label>

        <div className={styles.logoText}>PORTFOLIO</div>
      </div>
      <div className={styles.mobileMenu}>
        <LangSwitcher />
      </div>
      <Menu />
      <div className={styles.settings}>
        <Link href={GITHUB_LINK}>
          <Image src={github} alt="github" className={styles.github} />
        </Link>
        <LangSwitcher />
      </div>
    </header>
  );
}
