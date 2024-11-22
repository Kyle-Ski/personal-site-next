import About from '../components/About';
import ParallaxHero from '../components/ParallaxHero';
import PersonalTimeLine from '../components/PersonalTimeLine';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import { getAllBlockData } from '../utils/notion';
import { AboutData, WebsiteData } from '../interfaces';
import BackToTop from '../components/BackToTop';
import NavBar from '../components/NavBar';
import StravaFeed from '../components/StravaFeed';
import ResumeViewer from '../components/ResumeViewer';


export default async function Page() {
  const response = await getAllBlockData(process.env?.NODE_ENV === 'production');
  const websiteData: WebsiteData = response?.about ? response : {
    about: {} as AboutData,
    personalTimeline: [],
    projects: [],
    skills: [],
  };

  const { about, personalTimeline, projects, skills } = websiteData;
  const resumeLink = process.env.UPDATED_RESUME_LINK || "/Kyle_Czajkowski_2024_L.pdf"
  return (
    <div>
      <main>
        <NavBar />
        <ParallaxHero />
        <About about={about} />
        <PersonalTimeLine timeline={personalTimeline} />
        <Skills skills={skills} />
        <ResumeViewer resumeLink={resumeLink} />
        <StravaFeed />
        <Projects projects={projects} />
        <BackToTop />
      </main>
      <Footer />
    </div>
  );
}
