import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const ParallaxSection = () => {
  const [offset, setOffset] = useState<number>(0)

  useEffect(() => {
    if (window) {
      const handleScroll = () => {
        setOffset(window.pageYOffset)
      }
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [offset])

  return (
    <div>
      <section className={styles.hero}>
        <Image
          id="heroImg"
          priority={true}
          src="/20220204_065056.jpeg"
          alt="Hero Image of Torrey's peak at sunrise"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        />
        <div className={styles.textWrapper}>
          <h1 className={styles.headline}>About</h1>
          <h2 className={styles.subHeadline}>Kyle Czajkowski</h2>
        </div>
      </section>
      <Image src="/Me.jpg" alt="Head-shot of Kyle" width={72} height={72} />
      <div>
        <p>
          My passion in life has always been learning new skills and exploring alluring
          places. To me happiness is constantly engaging in activities that keep me in
          motion towards a better future.
        </p>
        <p>
          As a Full-Stack Developer, I have been able to pursue my love of problem
          solving, experimenting, improvement of my work and myself.
        </p>
        <p>
          While I am not working, I enjoy learning the Guitar, playing board games, and
          reading. When I have more free time, I love to spend time outdoors with my wife
          and our dog: backpacking, hiking, and climbing 14er's.
        </p>
      </div>
    </div>
  )
}

export default ParallaxSection
