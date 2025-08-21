"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Mountain, Code } from "lucide-react";
import ToggleDarkMode from "./ToggleDarkMode";
import { ABOUT_TITLE, FOOTER, PERSONAL_TIMELINE_ANCHOR, PROJECTS_TITLE, RESUME_ANCHOR, SKILLS_TITLE, STRAVA_TITLE } from "@/utils/constants";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('')

  const navItems = [
    {
      href: `/#${ABOUT_TITLE}`,
      label: "About",
      type: "main"
    },
    {
      href: `/#${PERSONAL_TIMELINE_ANCHOR}`,
      label: "Timeline",
      type: "main"
    },
    {
      href: `/#${PROJECTS_TITLE}`,
      label: "Projects",
      type: "main"
    },
    {
      href: `/blog`,
      label: "Blog",
      type: "main",
      icon: Code
    },
    // Adventure section
    {
      href: `/adventures`,
      label: "Adventures",
      type: "adventure",
      icon: Mountain
    },
    {
      href: `/gear`,
      label: "Gear Room",
      type: "adventure",
      icon: Mountain
    },
    { href: `/gear/reviews`, label: "Gear Reviews", icon: Mountain  },
    {
      href: `/peaks`,
      label: "Peak Tracker",
      type: "adventure",
      icon: Mountain
    },
    // Other sections
    {
      href: `/#${SKILLS_TITLE}`,
      label: "Skills",
      type: "main"
    },
    {
      href: `/#${RESUME_ANCHOR}`,
      label: "Resume",
      type: "main"
    },
    {
      href: `/#${STRAVA_TITLE}`,
      label: "Training",
      type: "adventure"
    },
    {
      href: `/#${FOOTER}`,
      label: "Contact",
      type: "main"
    },
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

  const getLinkStyles = (item: any) => {
    const baseStyles = "text-sm font-medium transition-colors duration-300 flex items-center gap-1";
    const isAdventure = item.type === "adventure";

    if (isActive(item.href)) {
      return `${baseStyles} ${isAdventure
        ? 'text-green-600 dark:text-green-400'
        : 'text-[var(--color-text-accent)] dark:text-[var(--color-text-accent)]'
        }`;
    }

    return `${baseStyles} ${isAdventure
      ? 'text-[var(--color-text-primary)] hover:text-green-600 dark:hover:text-green-400'
      : 'text-[var(--color-text-primary)] hover:text-[var(--color-text-accent)] dark:hover:text-[var(--color-text-accent)]'
      }`;
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)] backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-[var(--color-text-primary)] dark:text-[var(--color-text-primary)]">
                Kyle Czajkowski
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 ml-auto">
              {/* Main Navigation */}
              <div className="flex items-center space-x-4">
                {navItems.filter(item => item.type === 'main').map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={getLinkStyles(item)}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {Icon && <Icon size={16} />}
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Adventure Section Separator */}
              <div className="h-6 w-px bg-[var(--color-border)]" />

              {/* Adventure Navigation */}
              <div className="flex items-center space-x-4">
                {navItems.filter(item => item.type === 'adventure').map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={getLinkStyles(item)}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {Icon && <Icon size={16} />}
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Theme Toggle */}
              <div className="ml-4">
                <ToggleDarkMode />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <ToggleDarkMode />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[var(--color-text-primary)] hover:text-[var(--color-text-accent)] transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
                {/* Main Section */}
                <div className="mb-4">
                  <h3 className="px-3 py-2 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
                    Main
                  </h3>
                  {navItems.filter(item => item.type === 'main').map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`${getLinkStyles(item)} block px-3 py-2 rounded-md text-base`}
                        onClick={() => handleLinkClick(item.href)}
                      >
                        {Icon && <Icon size={16} />}
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                {/* Adventure Section */}
                <div>
                  <h3 className="px-3 py-2 text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider flex items-center gap-1">
                    <Mountain size={14} />
                    Adventures
                  </h3>
                  {navItems.filter(item => item.type === 'adventure').map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`${getLinkStyles(item)} block px-3 py-2 rounded-md text-base`}
                        onClick={() => handleLinkClick(item.href)}
                      >
                        {Icon && <Icon size={16} />}
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default NavBar;