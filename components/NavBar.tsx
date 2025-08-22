"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Mountain, Code, ChevronDown } from "lucide-react";
import ToggleDarkMode from "./ToggleDarkMode";
import { ABOUT_TITLE, FOOTER, PERSONAL_TIMELINE_ANCHOR, PROJECTS_TITLE, RESUME_ANCHOR, SKILLS_TITLE, STRAVA_TITLE } from "@/utils/constants";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [showAdventureDropdown, setShowAdventureDropdown] = useState(false);

  const mainNavItems = [
    { href: `/#${ABOUT_TITLE}`, label: "About" },
    { href: `/#${PERSONAL_TIMELINE_ANCHOR}`, label: "Timeline" },
    { href: `/#${PROJECTS_TITLE}`, label: "Projects" },
    { href: `/blog`, label: "Blog", icon: Code },
  ];

  const adventureItems = [
    { href: `/adventures`, label: "Trip Reports", description: "Recent adventures & route info" },
    { href: `/gear`, label: "Gear Room", description: "My complete gear collection" },
    { href: `/gear/reviews`, label: "Gear Reviews", description: "Field-tested gear insights" },
    { href: `/peaks`, label: "Peak Tracker", description: "Colorado 14ers & summits" },
    { href: `/#${STRAVA_TITLE}`, label: "Training", description: "Running & fitness tracking" },
  ];

  const otherNavItems = [
    { href: `/#${SKILLS_TITLE}`, label: "Skills" },
    { href: `/#${RESUME_ANCHOR}`, label: "Resume" },
    { href: `/#${FOOTER}`, label: "Contact" },
  ];

  const isActive = (href: string) => {
  if (typeof window !== 'undefined') {
    const currentPath = window.location.pathname;
    const currentHash = window.location.hash;
    
    // Handle homepage sections with hashes
    if (href.includes('#')) {
      return `${currentPath}${currentHash}` === href;
    }
    
    // Handle regular pages - check if current path starts with href
    if (href === '/') {
      return currentPath === '/';
    }
    
    // For adventure pages, also check if we're on a sub-page
    if (href === '/adventures') {
      return currentPath.startsWith('/adventures');
    }
    
    if (href === '/gear') {
      return currentPath.startsWith('/gear');
    }
    
    return currentPath.startsWith(href);
  }
  return activeItem === href;
};


  const handleLinkClick = (item: string) => {
    setActiveItem(item);
    setIsOpen(false);
    setShowAdventureDropdown(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-[var(--color-text-primary)]">
                Kyle Czajkowski
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 ml-auto">
              {/* Main Navigation Items */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${
                    isActive(item.href)
                      ? 'text-[var(--color-text-accent)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {item.icon && <item.icon size={16} />}
                  {item.label}
                </Link>
              ))}

              {/* Adventure Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShowAdventureDropdown(true)}
                onMouseLeave={() => setShowAdventureDropdown(false)}
              >
                <button className="text-sm font-medium transition-colors duration-300 flex items-center gap-1 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
                  <Mountain size={16} />
                  Adventures
                  <ChevronDown size={14} className={`transition-transform ${showAdventureDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {showAdventureDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
                    <div className="py-2">
                      {adventureItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => handleLinkClick(item.href)}
                          className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <div className="font-medium text-gray-900 dark:text-gray-100">
                            {item.label}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Other Navigation Items */}
              {otherNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? 'text-[var(--color-text-accent)]'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <ToggleDarkMode />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <ToggleDarkMode />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-text-accent)]"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
              {/* Mobile Main Items */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className="block px-3 py-2 text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] flex items-center gap-2"
                >
                  {item.icon && <item.icon size={16} />}
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Adventure Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-green-600 dark:text-green-400 flex items-center gap-1 mb-2">
                  <Mountain size={16} />
                  Adventures
                </div>
                <div className="pl-4 space-y-1">
                  {adventureItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                      className="block py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Other Items */}
              {otherNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className="block px-3 py-2 text-base font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;