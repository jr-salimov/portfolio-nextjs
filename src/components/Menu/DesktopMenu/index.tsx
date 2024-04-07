"use client";
import styles from "./DesktopMenu.module.scss";

export function DesktopMenu({ items }: any) {
  return (
    <nav className={styles.navigation}>
      {items.map((item: any) => (
        <a className={styles.link} key={item.link} href={item.link}>
          {item.title}
        </a>
      ))}
    </nav>
  );
}
