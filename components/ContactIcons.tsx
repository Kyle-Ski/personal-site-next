import {
  AiOutlineDownload,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai';
import styles from '../styles/ContactIcons.module.css';
import Link from 'next/link';

const ContactIcons = () => {
  return (
    <div className={styles.iconsWrapper}>
      <Link href="https://github.com/Kyle-Ski" aria-label="Link to Kyle's GitHub" target="_blank" rel="noopener noreferrer">
        <div className={styles.iconItem}>
          <AiOutlineGithub />
        </div>
      </Link>
      <Link href="https://www.instagram.com/ski_roy_jenkins" aria-label="Link to Kyle's Instagram" target="_blank" rel="noopener noreferrer">
        <div className={styles.iconItem}>
          <AiOutlineInstagram />
        </div>
      </Link>
      <Link href="https://www.linkedin.com/in/kyle-czajkowski" aria-label="Link to Kyle's LinkedIn" target="_blank" rel="noopener noreferrer">
        <div className={styles.iconItem}>
          <AiFillLinkedin />
        </div>
      </Link>
      <Link href="mailto:kyle@czajkowski.tech" aria-label="Link to send Kyle an email" target="_blank" rel="noopener noreferrer">
        <div className={styles.iconItem}>
          <AiOutlineMail />
        </div>
      </Link>
      <Link href="https://twitter.com/SkiRoyJenkins" aria-label="Link to Kyle's Twitter" target="_blank" rel="noopener noreferrer">
        <div className={styles.iconItem}>
          <AiOutlineTwitter />
        </div>
      </Link>
    </div>
  );
};

export default ContactIcons;
