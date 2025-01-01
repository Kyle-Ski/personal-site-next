import About from '../components/About';
import ParallaxHero from '../components/ParallaxHero';
import PersonalTimeLine from '../components/PersonalTimeLine';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { getAllBlockData } from '../utils/notion';
import { AboutData, WebsiteData } from '../interfaces';
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

  const { about, personalTimeline, skills } = websiteData;
  
  return (
    <div>
      <main>
        <ParallaxHero />
        <About about={about} />
        <PersonalTimeLine timeline={personalTimeline} />
        <Projects />
        <ResumeViewer/>
        <Skills skills={skills} />
        <StravaFeed />
      </main>
    </div>
  );
}
