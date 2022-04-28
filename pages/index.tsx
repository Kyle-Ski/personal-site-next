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
import { DarkModeProvider } from '../hooks/useDarkMode'
import NavBar from '../components/NavBar'
import dynamic from 'next/dynamic'
const ResumeViewer = dynamic(() => import('../components/ResumeViewer'), {ssr: false})
interface Props {
  websiteData: WebsiteData
}
const Home: NextPage<Props> = ({ websiteData }: Props) => {
  // console.log('DATA:', websiteData)
  const { about, personalTimeline, projects, skills } = websiteData
  const handleScrollUp = () => {
    window?.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div >
      <Head>
        <title>Kyle Czajkowski</title>
        <meta name="description" content="Kyle Czajkowski's personal website" />
        <link rel="icon" href="/Me.jpg" />
        <meta name="google-site-verification" content="Gj4fTNTUagYn--QC4cntqO4rOaJvehv6-gCqcSsxPWs" />
      </Head>
      <DarkModeProvider>
        <main>
          <NavBar />
          <ParallaxHero />
          <About about={about} />
          <PersonalTimeLine timeline={personalTimeline} />
          <Skills skills={skills} />
          <Projects projects={projects} />
          {typeof window === 'undefined' ? null : <ResumeViewer />}
          <BackToTop handleScroll={handleScrollUp} />
        </main>
        <Footer />
      </DarkModeProvider>
    </div>
  )
}
export async function getStaticProps() {
  const response = await getAllBlockData(process.env?.NODE_ENV === 'production')
  const websiteData = response?.about ? response : null
  return {
    props: {
      websiteData,
    },
  }
}

export default Home
