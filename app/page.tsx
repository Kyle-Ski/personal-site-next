import About from '../components/About';
import ParallaxHero from '../components/ParallaxHero';
import PersonalTimeLine from '../components/PersonalTimeLine';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
// import { getAllBlockData } from '../utils/notion';
// import { AboutData, WebsiteData } from '../interfaces';
import StravaFeed from '../components/StravaFeed';
import ResumeViewer from '../components/ResumeViewer';


export default async function Page() {
  // const response = await getAllBlockData(process.env?.NODE_ENV === 'production');
  // const websiteData: WebsiteData = response?.about ? response : {
  //   about: {} as AboutData,
  //   personalTimeline: [],
  //   projects: [],
  //   skills: [],
  // };

  // const { about, personalTimeline, skills } = websiteData;

  return (
    <div>
      <main>
        <ParallaxHero />
        <About about={{
          aboutParagraph: `Hello 👋 I’m Kyle, a Software Engineer from Colorado, currently living in the San Fransisco Bay area.

My passion in life has always been learning new skills and exploring alluring
places. To me happiness is constantly engaging in activities that keep me in
motion towards a better future.

As a Full-Stack Developer, I have been able to pursue my love of problem
solving, experimenting, improvement of my work and myself.

While I am not working, I enjoy learning the Guitar, playing board games, and
reading. When I have more free time, I love to spend time outdoors with `}} />
        <PersonalTimeLine timeline={[
          {
            "title": "Freelance Software Engineer | Consultant",
            "description": "Contributing to a diverse range of Typescript, Javascript and Kotlin applications. Focusing on React, Node.js and Android development.",
            "dateRange": "Mar 2022 - Present 🔮"
          },
          {
            "title": "Lift Operations | @Powderhorn Mountain Resort",
            "description": "Adeptly managed queues, troubleshot technical issues, and prioritized safety protocols, refining my problem-solving abilities while maintaining the seamless flow of operations.",
            "dateRange": "Nov 2023 - April 2024"
          },
          {
            "title": "Android Engineer | @FluentStream",
            "description": "Transitioned into an Android Engineer, and learned a lot. Maintained a Saas mobile application. Worked on duplicating functionality of a React Native app into an Android one.",
            "dateRange": "Jan 2021 - Feb 2022"
          },
          {
            "title": "Software Engineer | @FluentStream",
            "description": "Contributed to all company products across the stack. Designed endpoints to fetch data for new components. Developed new features to satisfy client requirements. Communicated development needs to the business.",
            "dateRange": "May 2019 - Jan 2021"
          },
          {
            "title": "Intro To JavaScript Course Lead | @Galvanize",
            "description": "Taught a free introduction to JavaScript and the web course. Started from the basics on how the sequence is read, and what keywords do. And if time allotted, we would transition into how we can use JavaScript to manipulate the DOM.",
            "dateRange": "Sept 2018 - Jan 2019"
          },
          {
            "title": "Student | @Galvanize",
            "description": "Six month, full-time web development immersive program. Creating applications for numerous work environments. Learning to build production-worthy applications with front-end and back-end proficiency.",
            "dateRange": "Aug 2018 - Jan 2019"
          },
          {
            "title": "Bartender | @Paxti's Pizza",
            "description": "🍻 🥃 🍷 ☕️",
            "dateRange": "Aug 2014 - Aug 2018"
          }
        ]} />
        <Projects />
        <ResumeViewer />
        <Skills skills={[
          {
            "name": "Bootstrap 3 & 4",
            "src": "/skillImgs/Bootstrap-Logo.png",
            "alt": "Bootstrap 3 & 4",
            "height": 860,
            "width": 1024
          },
          {
            "name": "Git",
            "src": "/skillImgs/Git-Logo.png",
            "alt": "Git",
            "height": 380,
            "width": 910
          },
          {
            "name": "Heroku",
            "src": "/skillImgs/Heroku-Logo.png",
            "alt": "Heroku",
            "height": 346,
            "width": 1042
          },
          {
            "name": "CSS",
            "src": "/skillImgs/CSS3-Logo.png",
            "alt": "CSS3",
            "height": 768,
            "width": 768
          },
          {
            "name": "HTML",
            "src": "/skillImgs/HTML5-Logo.png",
            "alt": "HTML5",
            "height": 1200,
            "width": 1200
          },
          {
            "name": "JavaScript",
            "src": "/skillImgs/JavaScript-Logo.jpg",
            "alt": "JavaScript",
            "height": 150,
            "width": 150
          },
          {
            "name": "TypeScript",
            "src": "/skillImgs/typescript.png",
            "alt": "TypeScript",
            "height": 96,
            "width": 96
          },
          {
            "name": "Knex",
            "src": "/skillImgs/KnexJS-Logo.png",
            "alt": "Knex.js",
            "height": 232,
            "width": 649
          },
          {
            "name": "Node",
            "src": "/skillImgs/NodeJS-Logo.png",
            "alt": "Node.js",
            "height": 1129,
            "width": 1843
          },
          {
            "name": "PostgreSQL",
            "src": "/skillImgs/PostgreSQL-Logo.png",
            "alt": "PostgreSQL",
            "height": 496,
            "width": 512
          },
          {
            "name": "React",
            "src": "/skillImgs/React-Logo.png",
            "alt": "React",
            "height": 1413,
            "width": 2000
          },
          {
            "name": "RESTful API",
            "src": "/skillImgs/RestAPI-Logo.png",
            "alt": "Restful API",
            "height": 1250,
            "width": 3334
          },
          {
            "name": "Tensorflow",
            "src": "/skillImgs/TF_JS_lockup.png",
            "alt": "Tensorflow",
            "height": 186,
            "width": 800
          },
          {
            "name": "Android",
            "src": "/skillImgs/Android-Logo.png",
            "alt": "Android Icon",
            "height": 2160,
            "width": 3840
          },
          {
            "name": "Kotlin",
            "src": "/skillImgs/kotlin.png",
            "alt": "Kotlin Icon",
            "height": 335,
            "width": 707
          }
        ]} />
        <StravaFeed />
      </main>
    </div>
  );
}
