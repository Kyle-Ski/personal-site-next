import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const ParallaxHero = () => {
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
    </div>
  )
}

export default ParallaxHero
