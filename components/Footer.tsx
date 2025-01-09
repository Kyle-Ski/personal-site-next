"use client";

import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FOOTER } from "../utils/constants";
import ContactIcons from "./ContactIcons";

const Footer = () => (
  <div id={FOOTER} className={styles.footerWrapper}>
    <div className="flex-1">
      <ContactIcons />
    </div>
    <footer>
      <Link
        href="https://github.com/Kyle-Ski/personal-site-next"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 dark:text-gray-400 hover:underline"
      >
        <span>© {new Date().getFullYear()} By Kyle Czajkowski</span>
      </Link>
    </footer>
  </div>
);

export default Footer;