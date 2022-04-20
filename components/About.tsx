import Image from 'next/image'
import { AboutData } from '../interfaces'
import { ABOUT_TITLE } from '../utils/constants'
import styles from '../styles/About.module.css'
interface Props {
  about: AboutData
}

const About = ({ about }: Props) => {
  return (
    <div id={ABOUT_TITLE} className={styles.aboutWrapper}>
      <Image src="/Me.jpg" alt="Head-shot of Kyle" width={300} height={300} layout='fixed'/>
      <div className={styles.aboutText}>{about?.aboutParagraph}</div>
    </div>
  )
}

export default About
