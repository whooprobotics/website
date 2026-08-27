"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenuLine, RiCloseLargeLine, RiArrowDownSLine } from "react-icons/ri";
import classNames from "classnames";

type NavLink = { label: string; href: string };
type NavItem = NavLink | { label: string; children: NavLink[] };

const menuItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  {
    label: "Programs",
    children: [
      { label: "VEXU", href: "/vexu" },
      { label: "Combat Robotics", href: "/combat" },
      { label: "Marketing", href: "/marketing" },
      { label: "Outreach", href: "/outreach" },
    ],
  },
  { label: "Media", href: "/media" },
];

const sponsorCta = { label: "Sponsor us", href: "/sponsors" };

function isLinkItem(item: NavItem): item is NavLink {
  return "href" in item;
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsProgramsOpen(false);
  };

  const desktopLinkClass = (isActive: boolean) =>
    classNames(
      "relative py-1 tracking-wider text-xl text-text transition-colors hover:text-primary",
      "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full",
      "after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100",
      isActive ? "text-primary after:scale-x-100" : "after:scale-x-0"
    );

  return (
    <nav className="fixed top-0 w-full frosted border-b border-hairline shadow-nav z-30">
      <div className="mx-auto lg:pr-5 py-1">
        <div className="flex items-center justify-between h-16 font-primary">
          <Link href="/" className="px-5 hover:scale-110 transition-transform" onClick={closeMenus}>
            <Image src="/logos/raw/Black.png" alt="Logo" className="w-8 h-12" width={1280} height={1855} />
          </Link>
          <div className="hidden lg:flex items-center space-x-7">
            {menuItems.map((item) => {
              if (isLinkItem(item)) {
                const isActive = pathname === item.href;
                return (
                  <Link className={desktopLinkClass(isActive)} href={item.href} key={item.href}>
                    {item.label}
                  </Link>
                );
              }

              const isChildActive = item.children.some((child) => pathname === child.href);
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsProgramsOpen(true)}
                  onMouseLeave={() => setIsProgramsOpen(false)}
                >
                  <button
                    type="button"
                    className={classNames(desktopLinkClass(isChildActive), "inline-flex items-center cursor-pointer")}
                    aria-expanded={isProgramsOpen}
                    aria-haspopup="true"
                    onClick={() => setIsProgramsOpen((open) => !open)}
                  >
                    {item.label}
                    <RiArrowDownSLine
                      className={classNames("w-5 h-5 ml-1 transition-transform", {
                        "rotate-180": isProgramsOpen,
                      })}
                    />
                  </button>
                  {isProgramsOpen ? (
                    <div className="absolute right-0 top-full pt-3">
                      <div className="surface rounded-xl p-1.5 min-w-52 animate-fade-in">
                        {item.children.map((child) => {
                          const isActive = pathname === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={classNames(
                                "block rounded-lg px-4 py-2 tracking-wider text-xl text-text transition-colors",
                                "hover:text-primary hover:bg-primary/8",
                                { "text-primary bg-primary/8": isActive }
                              )}
                              onClick={() => setIsProgramsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
            <Link
              href={sponsorCta.href}
              className="btn btn-primary px-4 py-1.5 text-lg tracking-wider"
            >
              {sponsorCta.label}
            </Link>
          </div>
          <button
            className="lg:hidden p-4 m-2 text-text hover:text-primary transition-colors cursor-pointer"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              setIsProgramsOpen(false);
            }}
          >
            {isMobileMenuOpen ? <RiCloseLargeLine className="w-6 h-6" /> : <RiMenuLine className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div className="lg:hidden absolute w-full border-t border-hairline shadow-nav z-10 frosted animate-fade-in">
            <div className="pb-2 space-y-4"></div>
            {menuItems.map((item) => {
              if (isLinkItem(item)) {
                const isActive = pathname === item.href;
                return (
                  <div key={item.href}>
                    <Link
                      className={`block py-2 px-5 font-primary tracking-wider transition-colors text-xl hover:text-primary hover:bg-primary/8 ${
                        isActive ? "text-primary bg-primary/8" : "text-text"
                      }`}
                      href={item.href}
                      onClick={closeMenus}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              }

              const isChildActive = item.children.some((child) => pathname === child.href);
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between py-2 px-5 font-primary tracking-wider transition-colors text-xl hover:text-primary cursor-pointer ${
                      isChildActive ? "text-primary" : "text-text"
                    }`}
                    aria-expanded={isProgramsOpen}
                    onClick={() => setIsProgramsOpen((open) => !open)}
                  >
                    {item.label}
                    <RiArrowDownSLine
                      className={classNames("w-5 h-5 transition-transform", {
                        "rotate-180": isProgramsOpen,
                      })}
                    />
                  </button>
                  {isProgramsOpen
                    ? item.children.map((child) => {
                        const isActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block py-2 pl-10 pr-5 font-primary tracking-wider transition-colors text-xl hover:text-primary hover:bg-primary/8 ${
                              isActive ? "text-primary bg-primary/8" : "text-text"
                            }`}
                            onClick={closeMenus}
                          >
                            {child.label}
                          </Link>
                        );
                      })
                    : null}
                </div>
              );
            })}
            <div className="px-5 pt-2 pb-4">
              <Link
                href={sponsorCta.href}
                className="btn btn-primary w-full font-primary text-xl tracking-wider"
                onClick={closeMenus}
              >
                {sponsorCta.label}
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
