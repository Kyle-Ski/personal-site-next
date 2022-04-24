import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { imgStrToBase64, shimmer } from '../utils/imageHelpers'

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
          src="/DSC04570-Pano.jpg"
          alt="Hero Image of the La Sal range from Goblin Valley State Park UT"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${imgStrToBase64(shimmer(700, 475))}`}
          quality={100}
          style={{ transform: `translateY(${offset * 0.5}px)` }}
        />
        <div className={styles.heroNameWrapper}>
          <h1 className={styles.headline}></h1>
          <h1 className={styles.subHeadline}>Kyle Czajkowski</h1>
        </div>
      </section>
    </div>
  )
}

export default ParallaxHero
