"use client";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import React from "react";
import { useTranslations } from "next-intl";

export function Menu() {
  const el = useTranslations("Menu");

  interface MenuItemsInterface {
    link: string;
    title: React.ReactNode;
  }

  const menuItems: MenuItemsInterface[] = [
    { link: "#home", title: `${el("home")}` },
    { link: "#about", title: `${el("about")}` },
    { link: "#skills", title: `${el("skills")}` },
    { link: "#projects", title: `${el("projects")}` },
    { link: "#contacts", title: `${el("contacts")}` },
  ];
  const { isMobileOrTablet } = useWindowDimensions();
  const MenuView = isMobileOrTablet ? MobileMenu : DesktopMenu;

  return <MenuView items={menuItems} />;
}
