import {
  AiOutlineDownload,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai'
import { Tooltip, Link as LinkUi } from '@nextui-org/react'
import styles from '../styles/ContactIcons.module.css'
import Link from 'next/link'

const ContactIcons = () => {
  return (
    <div className={styles.iconsWrapper}>
      <Link passHref aria-label="Link to Kyle's Git Hub" href="https://github.com/Kyle-Ski">
        <LinkUi target="_blank" underline={false}>
          <div className={styles.iconItem}>
            <AiOutlineGithub />
          </div>
        </LinkUi>
      </Link>
      <Link passHref aria-label="Link to Kyle's Instagram" href="https://www.instagram.com/ski_roy_jenkins">
        <LinkUi target="_blank" underline={false}>
          <div className={styles.iconItem}>
            <AiOutlineInstagram />
          </div>
        </LinkUi>
      </Link>
      <Link passHref aria-label="Link to Kyle's Linkedin" href="https://www.linkedin.com/in/kyle-czajkowski">
        <LinkUi target="_blank" underline={false}>
          <div className={styles.iconItem}>
            <AiFillLinkedin />
          </div>
        </LinkUi>
      </Link>
      <Link passHref aria-label="Link to send Kyle an email" href="mailto:kyle@czajkowski.tech">
        <LinkUi target="_blank" underline={false}>
          <div className={styles.iconItem}>
            <AiOutlineMail />
          </div>
        </LinkUi>
      </Link>
      <Link passHref aria-label="Link to Kyle's Twitter" href="https://twitter.com/SkiRoyJenkins">
        <LinkUi target="_blank" underline={false}>
          <div className={styles.iconItem}>
            <AiOutlineTwitter />
          </div>
        </LinkUi>
      </Link>
    </div>
  )
}

export default ContactIcons
