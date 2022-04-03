import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ParallaxHero from '../components/ParallaxHero'
import PersonalTimeLine from '../components/PersonalTimeLine'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import { SKILLS_DATA } from '../utils/data/skillsData'
import { PERSONAL_TIMELINE } from '../utils/data/timeLineData'
import { getAllBlockData } from '../utils/notion'
import { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints'
import { WebsiteData } from '../interfaces'

interface Props {
  websiteData: WebsiteData
}
const Home: NextPage<Props> = (  {websiteData}: Props ) => {
  console.log("DATA:", websiteData)
  
  return (
    <div>
      <Head>
        <title>Kyle Czajkowski</title>
        <meta name="description" content="Kyle Czajkowski's personal website" />
        <link rel="icon" href="/Me.jpg" />
      </Head>

      <main>
        <ParallaxHero />
        <About about={websiteData.about}/>
        <PersonalTimeLine timeline={PERSONAL_TIMELINE} />
        <Projects />
        <Skills skills={SKILLS_DATA} />
      </main>
      <Footer />
    </div>
  )
}
export async function getStaticProps() {
  const response = await getAllBlockData()
  console.log("getStaticProps", response)
  const websiteData = response?.about ? response : null
  return {
    props: {
      websiteData
    }
  }
}

export default Home
