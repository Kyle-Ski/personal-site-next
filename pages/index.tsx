import type { NextPage } from 'next'
import Head from 'next/head'
import ParallaxSection from '../components/ParallaxSection'
import PersonalTimeLine from '../components/PersonalTimeLine'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import { SKILLS_DATA } from '../utils/data/skillsData'
import { PERSONAL_TIMELINE } from '../utils/data/timeLineData'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kyle Czajkowski</title>
        <meta name="description" content="Kyle Czajkowski's personal website" />
        <link rel="icon" href="/Me.jpg" />
      </Head>

      <main>
        <ParallaxSection />
        <PersonalTimeLine timeline={PERSONAL_TIMELINE} />
        <Projects />
        <Skills skills={SKILLS_DATA} />
      </main>
      <Footer />
    </div>
  )
}

export default Home
