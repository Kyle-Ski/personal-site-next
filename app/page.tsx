import About from '../components/About';
import ParallaxHero from '../components/ParallaxHero';
import PersonalTimeLine from '../components/PersonalTimeLine';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import { getAllBlockData } from '../utils/notion';
import { WebsiteData } from '../interfaces';
import BackToTop from '../components/BackToTop';
import NavBar from '../components/NavBar';
import StravaFeed from '../components/StravaFeed';
// import dynamic from 'next/dynamic';
import ResumeViewer from '../components/ResumeViewer';

// const ResumeViewer = dynamic(() => import('../components/ResumeViewer'), { ssr: false });

export default async function Page() {
  const response = await getAllBlockData(process.env?.NODE_ENV === 'production');
  const websiteData: WebsiteData = response?.about ? response : null;

  const { about, personalTimeline, projects, skills } = websiteData || {};

  return (
    <div>
      <main>
        <NavBar />
        <ParallaxHero />
        <About about={about} />
        <PersonalTimeLine timeline={personalTimeline} />
        <Skills skills={skills} />
        {typeof window === 'undefined' ? null : <ResumeViewer />}
        <StravaFeed />
        <Projects projects={projects} />
        <BackToTop />
      </main>
      <Footer />
    </div>
  );
}
