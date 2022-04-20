import {
  AiOutlineDownload,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from 'react-icons/ai'
import { Tooltip, Link } from '@nextui-org/react'
import styles from '../styles/ContactIcons.module.css'

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
        <Link
          aria-details="Link used to download Kyle's resume."
          target="_blank"
          underline={false}
          href="https://raw.githubusercontent.com/Kyle-Ski/Personal-Site2/add902b9b38d35d5f4d16cc10bb13fc15bf68f8f/public/img/Resume_April_2022.pdf"
          download
        >
          <div className={styles.iconItem}>
            <AiOutlineDownload />
          </div>
        </Link>
      </Tooltip>
      <Link target="_blank" underline={false} href="https://github.com/Kyle-Ski">
        <div className={styles.iconItem}>
          <AiOutlineGithub />
        </div>
      </Link>
      <Link
        target="_blank"
        underline={false}
        href="https://www.instagram.com/ski_roy_jenkins"
      >
        <div className={styles.iconItem}>
          <AiOutlineInstagram />
        </div>
      </Link>
      <Link
        target="_blank"
        underline={false}
        href="https://www.linkedin.com/in/kyle-czajkowski"
      >
        <div className={styles.iconItem}>
          <AiFillLinkedin />
        </div>
      </Link>
      <Link target="_blank" underline={false} href="mailto:kyle@czajkowski.tech">
        <div className={styles.iconItem}>
          <AiOutlineMail />
        </div>
      </Link>
      <Link target="_blank" underline={false} href="https://twitter.com/SkiRoyJenkins">
        <div className={styles.iconItem}>
          <AiOutlineTwitter />
        </div>
      </Link>
    </div>
  )
}

export default ContactIcons
