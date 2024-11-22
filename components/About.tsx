import Image from 'next/image';
import Link from 'next/link';
import { AboutData } from '../interfaces';
import { ABOUT_TITLE } from '../utils/constants';
import styles from '../styles/About.module.css';
import { imgStrToBase64, shimmer } from '../utils/imageHelpers';

interface Props {
  about: AboutData;
}

const About = ({ about }: Props) => {
  return (
    <div id={ABOUT_TITLE} className={styles.aboutWrapper}>
      <Image
        src="/Me.jpg"
        alt="Head-shot of Kyle"
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${imgStrToBase64(shimmer(700, 475))}`}
      />
      <div className={styles.aboutText}>
        {about?.aboutParagraph}
        <Link href="https://www.kylieis.online/" target="_blank" rel="noopener noreferrer">
          my wife
        </Link>
        {" and our dog: backpacking, hiking, and climbing 14er's."}
      </div>
    </div>
  );
};

export default About;
