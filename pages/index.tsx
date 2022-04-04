import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ParallaxHero from '../components/ParallaxHero'
import PersonalTimeLine from '../components/PersonalTimeLine'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import { getAllBlockData } from '../utils/notion'
import { WebsiteData } from '../interfaces'
import BackToTop from '../components/BackToTop'
import { useRef } from 'react'

interface Props {
  websiteData: WebsiteData
}
const Home: NextPage<Props> = ({ websiteData }: Props) => {
  console.log('DATA:', websiteData)
  const { about, personalTimeline, projects, skills } = websiteData
  const refScrollUp = useRef<any>() // TODO Fix this
  const handleScrollUp = () => {
    refScrollUp?.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div>
      <Head>
        <title>Kyle Czajkowski</title>
        <meta name="description" content="Kyle Czajkowski's personal website" />
        <link rel="icon" href="/Me.jpg" />
      </Head>
      <div ref={refScrollUp} />
      <main>
        <ParallaxHero />
        <About about={about} />
        <PersonalTimeLine timeline={personalTimeline} />
        <Projects projects={projects} />
        <Skills skills={skills} />
        <BackToTop handleScroll={handleScrollUp} />
      </main>
      <Footer />
    </div>
  )
}
export async function getStaticProps() {
  const response = await getAllBlockData()
  const websiteData = response?.about ? response : null
  return {
    props: {
      websiteData,
    },
  }
}

export default Home
