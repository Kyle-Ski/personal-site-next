"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Mountain, FilePenLine, ChevronDown } from "lucide-react";
import ToggleDarkMode from "./ToggleDarkMode";
import { ABOUT_TITLE, FOOTER, PERSONAL_TIMELINE_ANCHOR, PROJECTS_TITLE, RESUME_ANCHOR, SKILLS_TITLE, STRAVA_TITLE } from "@/utils/constants";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [showAdventureDropdown, setShowAdventureDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reordered navigation
  const mainNavItems = [
    { href: `/#${ABOUT_TITLE}`, label: "About" },
    { href: `/#${PERSONAL_TIMELINE_ANCHOR}`, label: "Timeline" },
    { href: `/#${PROJECTS_TITLE}`, label: "Projects" },
    { href: `/blog`, label: "Blog", icon: FilePenLine },
    { href: `/#${SKILLS_TITLE}`, label: "Skills" },
    { href: `/#${RESUME_ANCHOR}`, label: "Resume" },
    { href: `/#${FOOTER}`, label: "Contact" },
  ];

  const adventureItems = [
    { href: `/reports`, label: "Trip Reports", description: "Recent adventures & route info" },
    { href: `/gear`, label: "Gear Room", description: "My complete gear collection" },
    { href: `/gear/reviews`, label: "Gear Reviews", description: "Field-tested gear insights" },
    { href: `/guides`, label: "Adventure Guides", description: "Route guides & planning resources" },
    { href: `/peaks`, label: "Peak Tracker", description: "Colorado 14ers & summits" },
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

      // For reports pages, also check if we're on a sub-page
      if (href === '/reports') {
        return currentPath.startsWith('/adventures');
      }

      if (href === '/gear') {
        return currentPath.startsWith('/gear');
      }

      if (href === '/guides') {
        return currentPath.startsWith('/guides');
      }

      return currentPath.startsWith(href);
    }
    return activeItem === href;
  };

  // Check if any adventure page is active
  const isAdventureActive = () => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      return currentPath.startsWith('/reports') ||
        currentPath.startsWith('/guides') ||
        currentPath.startsWith('/gear') ||
        currentPath.startsWith('/peaks');
    }
    return false;
  };

  const handleLinkClick = (item: string) => {
    setActiveItem(item);
    setIsOpen(false);
    setShowAdventureDropdown(false);
  };

  // Better dropdown handling with delays
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowAdventureDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowAdventureDropdown(false);
    }, 150); // 150ms delay before closing
  };

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowAdventureDropdown(false);
      }
    };

    if (showAdventureDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [showAdventureDropdown]);

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
                  className={`text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${isActive(item.href)
                    ? 'text-[var(--color-text-accent)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                >
                  {item.icon && <item.icon size={16} />}
                  {item.label}
                </Link>
              ))}

              {/* Adventure Dropdown - Now Last */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`text-sm font-medium transition-colors duration-300 flex items-center gap-1 ${isAdventureActive()
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-green-700 dark:text-green-300 hover:text-green-600 dark:hover:text-green-400'
                    }`}
                  onClick={() => setShowAdventureDropdown(!showAdventureDropdown)}
                >
                  <Mountain size={16} />
                  Alpine
                  <ChevronDown size={14} className={`transition-transform duration-200 ${showAdventureDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu - Improved positioning and hover handling */}
                {showAdventureDropdown && (
                  <div
                    className="absolute top-full right-0 mt-2 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-50"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      {adventureItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => handleLinkClick(item.href)}
                          className={`block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${isActive(item.href) ? 'bg-green-50 dark:bg-green-900/20' : ''
                            }`}
                        >
                          <div className={`font-medium ${isActive(item.href)
                            ? 'text-green-600 dark:text-green-400'
                            : 'text-gray-900 dark:text-gray-100'
                            }`}>
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
                  className={`block px-3 py-2 text-base font-medium flex items-center gap-2 ${isActive(item.href)
                    ? 'text-[var(--color-text-accent)]'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                >
                  {item.icon && <item.icon size={16} />}
                  {item.label}
                </Link>
              ))}

              {/* Mobile Adventure Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-green-600 dark:text-green-400 flex items-center gap-1 mb-2">
                  <Mountain size={16} />
                  Alpine
                </div>
                <div className="pl-4 space-y-1">
                  {adventureItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                      className={`block py-2 text-sm ${isActive(item.href)
                        ? 'text-green-600 dark:text-green-400 font-medium'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                        }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;