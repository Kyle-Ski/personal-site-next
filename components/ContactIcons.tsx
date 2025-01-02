import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { SiBuymeacoffee } from 'react-icons/si';
import { FaBluesky } from "react-icons/fa6";
import styles from '../styles/ContactIcons.module.css';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface IconData {
  href: string;
  icon: IconType;
  label: string;
}

const ContactIcons = () => {
  // First row icons
  const topRowIcons: IconData[] = [
    { href: "https://github.com/Kyle-Ski", icon: AiOutlineGithub, label: "Link to Kyle's GitHub" },
    { href: "https://www.instagram.com/ski_roy_jenkins", icon: AiOutlineInstagram, label: "Link to Kyle's Instagram" },
    { href: "https://www.linkedin.com/in/kyle-czajkowski", icon: AiFillLinkedin, label: "Link to Kyle's LinkedIn" },
    { href: "mailto:kyle@czajkowski.tech", icon: AiOutlineMail, label: "Link to send Kyle an email" },
  ];

  // Second row icons
  const bottomRowIcons: IconData[] = [
    { href: "https://twitter.com/SkiRoyJenkins", icon: AiOutlineTwitter, label: "Link to Kyle's Twitter" },
    { href: "https://bsky.app/profile/skiroyjenkins.bsky.social", icon: FaBluesky, label: "Link to Kyle's BlueSky" },
    { href: "https://buymeacoffee.com/skiroyjenkins", icon: SiBuymeacoffee, label: "Buy Kyle a coffee" },
  ];

  return (
    <div className={styles.iconsWrapper}>
      <div className={styles.rowContainer}>
        {topRowIcons.map((icon, index) => {
          const IconComponent = icon.icon;
          return (
            <Link 
              key={index} 
              href={icon.href} 
              aria-label={icon.label} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconItem}
            >
              <IconComponent />
            </Link>
          );
        })}
      </div>
      <div className={styles.rowContainer}>
        {bottomRowIcons.map((icon, index) => {
          const IconComponent = icon.icon;
          return (
            <Link 
              key={index} 
              href={icon.href} 
              aria-label={icon.label} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.iconItem}
            >
              <IconComponent />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ContactIcons;