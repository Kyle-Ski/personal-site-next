"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { Menu, X } from "lucide-react";
import ToggleDarkMode from "./ToggleDarkMode";
import { cn } from "@/lib/utils"; // Ensure this utility is correctly defined

const NavBar = () => {
  const pathname = usePathname(); // Get the current pathname
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#personal-timeline", label: "Personal Timeline" },
    { href: "/#projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/#skills", label: "Skills" },
    { href: "/#resume", label: "Resume" },
    { href: "/#strava", label: "Strava Runs" },
    { href: "/#contact", label: "Get in Contact" },
  ];

  // Helper function to determine if the link is active
  const isActive = (href: string) => {
    if (href === "/blog") {
      return pathname.startsWith("/blog");
    }
    return pathname === href;
  };

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
                Kyle Czajkowski
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 ml-auto">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-sm font-medium transition-colors duration-300 
                    ${isActive(item.href) ? "text-primary underline" : "text-gray-700 dark:text-gray-300"}
                    hover:text-primary hover:underline
                  `}
                >
                  {item.label}
                </Link>
              ))}
              <ToggleDarkMode />
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center">
              <ToggleDarkMode />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-4 p-2 rounded-md hover:bg-accent transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background rounded-lg mb-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      block px-3 py-2 rounded-md text-base font-medium transition 
                      ${isActive(item.href) ? "text-primary underline" : "text-gray-700 dark:text-gray-300"}
                      hover:text-primary hover:underline
                    `}
                    onClick={handleLinkClick}
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
