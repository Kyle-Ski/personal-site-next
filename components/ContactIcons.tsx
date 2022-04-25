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
      <Tooltip
        hideArrow
        css={{ backgroundColor: '#55893c' }}
        content="Download Kyle's resume."
        color="primary"
        placement="topStart"
        contentColor="warning"
      >
        <LinkUi
          aria-details="Link used to download Kyle's resume."
          target="_blank"
          underline={false}
          href="https://raw.githubusercontent.com/Kyle-Ski/Personal-Site2/add902b9b38d35d5f4d16cc10bb13fc15bf68f8f/public/img/Resume_April_2022.pdf"
          download
        >
          <div className={styles.iconItem}>
            <AiOutlineDownload />
          </div>
        </LinkUi>
      </Tooltip>
      <Link passHref href="https://github.com/Kyle-Ski">
        <LinkUi target="_blank" underline={false}>
          <div className={styles.iconItem}>
            <AiOutlineGithub />
          </div>
        </LinkUi>
      </Link>
      <Link passHref href="https://www.instagram.com/ski_roy_jenkins">
        <LinkUi
          target="_blank"
          underline={false}
        >
          <div className={styles.iconItem}>
            <AiOutlineInstagram />
          </div>
        </LinkUi>
      </Link>
      <Link passHref href="https://www.linkedin.com/in/kyle-czajkowski">
        <LinkUi
          target="_blank"
          underline={false}
        >
          <div className={styles.iconItem}>
            <AiFillLinkedin />
          </div>
        </LinkUi>
      </Link>
      <Link passHref href="mailto:kyle@czajkowski.tech">
        <LinkUi target="_blank" underline={false}>
          <div className={styles.iconItem}>
            <AiOutlineMail />
          </div>
        </LinkUi>
      </Link>
      <Link passHref href="https://twitter.com/SkiRoyJenkins">
        <LinkUi
          target="_blank"
          underline={false}
        >
          <div className={styles.iconItem}>
            <AiOutlineTwitter />
          </div>
        </LinkUi>
      </Link>
    </div>
  )
}

export default ContactIcons
