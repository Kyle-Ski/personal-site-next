"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ToggleDarkMode from "./ToggleDarkMode";
import { ABOUT_TITLE, FOOTER, PERSONAL_TIMELINE_ANCHOR, PROJECTS_TITLE, RESUME_ANCHOR, SKILLS_TITLE, STRAVA_TITLE } from "@/utils/constants";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('')

  const navItems = [
    { href: `/#${ABOUT_TITLE}`, label: "About" },
    { href: `/#${PERSONAL_TIMELINE_ANCHOR}`, label: "Personal Timeline" },
    { href: `/#${PROJECTS_TITLE}`, label: "Projects" },
    { href: `/blog`, label: "Blog" },
    { href: `/#${SKILLS_TITLE}`, label: "Skills" },
    { href: `/#${RESUME_ANCHOR}`, label: "Resume" },
    { href: `/#${STRAVA_TITLE}`, label: "Strava Runs" },
    { href: `/#${FOOTER}`, label: "Get in Contact" },
  ];

  // Helper function to determine if the link is active
  const isActive = (href: string) => {
    return activeItem === href;
  };

  // Function to close the menu when a link is clicked
  const handleLinkClick = (item: string) => {
    setActiveItem(item)
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)]">
                Kyle Czajkowski
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 ml-auto">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      text-sm font-medium transition-colors duration-300 
                      ${isActive(item.href) ? "text-[var(--accent-color)] underline" : "text-[var(--color-text-primary)] dark:text-[var(--color-text-secondary)]"}
                      hover:text-[var(--accent-color)] hover:underline
                    `}
                    onClick={() => handleLinkClick(item.href)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <ToggleDarkMode />
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center">
              <ToggleDarkMode />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-4 p-2 rounded-md hover:bg-[var(--color-accent)] transition-colors duration-300"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary)]" />
                ) : (
                  <Menu className="h-6 w-6 text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary)]" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--color-bg-primary)] rounded-lg mb-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      block px-3 py-2 rounded-md text-base font-medium transition 
                      ${isActive(item.href) ? "text-[var(--color-primary)] underline" : "text-[var(--color-text-secondary)] dark:text-[var(--color-text-secondary)]"}
                      hover:text-[var(--color-primary)] hover:underline
                    `}
                    onClick={() => handleLinkClick(item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
      {/* Spacer div to push content below fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default NavBar;
