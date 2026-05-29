"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { NavigationSubLink } from "@/app/services/strapiApi";

const STATIC_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    subLinks: [
      {
        label: "Direct/Lateral Hiring",
        href: "/services/direct-lateral-hiring",
      },
      { label: "Contract Hiring", href: "/services/contract-hiring" },
      { label: "Train and Hire", href: "/services/train-and-hire" },
      { label: "Corporate Training", href: "/services/corporate-training" },
    ],
  },
  {
    label: "Job Openings",
    href: "/job-openings",
  },
  { label: "Contact us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<
    Record<string, boolean>
  >({});
  const pathname = usePathname();

  const isPathActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = STATIC_NAV_LINKS;

  return (
    <header className="w-full bg-bg-header border-b border-border relative z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <Link
          href="/"
          onClick={(e) => handleLinkClick(e, "/")}
          className="flex items-center shrink-0"
        >
          <Image
            src="/assets/common/microacademy-logo.png"
            alt="Micro Academy Logo"
            width={220}
            height={120}
            priority
            className="h-14 md:h-20 w-auto object-contain"
            unoptimized
          />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-8 h-full"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              isPathActive(link.href) ||
              Boolean(
                link.subLinks?.some((subLink: NavigationSubLink) =>
                  isPathActive(subLink.href),
                ),
              );

            if (link.subLinks) {
              return (
                <div
                  key={link.href}
                  className="relative group h-full flex items-center shrink-0"
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    aria-haspopup="true"
                    aria-expanded="false"
                    className={`relative flex items-center gap-1 text-base font-bold transition-colors pb-1 ${
                      isActive
                        ? "text-text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-text-accent"
                        : "text-text-dark hover:text-text-accent hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-text-accent"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>

                  <div className="absolute top-full left-0 min-w-55 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50">
                    {link.subLinks.map((subLink: NavigationSubLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        onClick={(e) => handleLinkClick(e, subLink.href)}
                        className={`px-4 py-2.5 text-sm font-semibold hover:bg-bg-header-mobile hover:text-text-accent transition-colors ${pathname === subLink.href ? "text-text-accent bg-bg-header-mobile" : "text-text-dark"}`}
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative text-base shrink-0 font-bold transition-colors pb-1 flex items-center ${
                  isActive
                    ? "text-text-accent after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-text-accent"
                    : "text-text-dark hover:text-text-accent hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-text-accent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <Image
            src="/assets/common/iso-9001.png"
            alt="TÜV SÜD ISO 9001 Certified"
            width={120}
            height={120}
            className="h-12 md:h-16 w-auto object-contain mix-blend-multiply transition-transform hover:scale-105"
            unoptimized
          />

          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => {
              setMenuOpen((prev) => !prev);
              if (menuOpen) {
                setMobileDropdownOpen({});
              }
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 bg-text-dark transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-dark transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-text-dark transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="lg:hidden bg-bg-header-mobile border-t border-border px-6 py-4 flex flex-col border-b shadow-md absolute w-full left-0 z-50"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              isPathActive(link.href) ||
              Boolean(
                link.subLinks?.some((subLink: NavigationSubLink) =>
                  isPathActive(subLink.href),
                ),
              );

            if (link.subLinks) {
              const isDropdownOpen = Boolean(mobileDropdownOpen[link.href]);

              return (
                <div
                  key={link.href}
                  className="flex flex-col border-b border-border py-1"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        setMenuOpen(false);
                        handleLinkClick(e, link.href);
                      }}
                      className={`text-sm font-medium py-2 grow ${isActive ? "text-text-accent" : "text-text-muted-alt"}`}
                    >
                      {link.label}
                    </Link>
                    <button
                      onClick={() =>
                        setMobileDropdownOpen((prev) => ({
                          ...prev,
                          [link.href]: !prev[link.href],
                        }))
                      }
                      aria-expanded={isDropdownOpen}
                      aria-label={
                        isDropdownOpen
                          ? `Collapse ${link.label}`
                          : `Expand ${link.label}`
                      }
                      className="px-2 py-2 flex items-center justify-center shrink-0"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform text-text-muted-alt ${isDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  {isDropdownOpen && (
                    <div className="flex flex-col gap-1 mt-1">
                      {link.subLinks.map((subLink: NavigationSubLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={(e) => {
                            setMenuOpen(false);
                            handleLinkClick(e, subLink.href);
                          }}
                          className={`text-[13px] py-1.5 font-medium ${pathname === subLink.href ? "text-text-accent font-bold" : "text-text-muted"}`}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  setMenuOpen(false);
                  handleLinkClick(e, link.href);
                }}
                className={`text-sm font-medium py-3 border-b border-border ${
                  isActive ? "text-text-accent" : "text-text-muted-alt"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
