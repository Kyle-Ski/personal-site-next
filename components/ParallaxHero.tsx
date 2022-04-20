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

  const shimmer = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#333" offset="20%" />
          <stop stop-color="#222" offset="50%" />
          <stop stop-color="#333" offset="70%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#333" />
      <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
    </svg>`

  const toBase64 = (str: string) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

  return (
    <div>
      <section className={styles.hero}>
        <Image
          id="heroImg"
          priority={true}
          src="/heroImg.jpg"
          alt="Hero Image of the La Sal range from Goblin Valley State Park UT"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
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
