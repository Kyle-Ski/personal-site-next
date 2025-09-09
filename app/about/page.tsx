import About from '../../components/About';
import PersonalTimeLine from '../../components/PersonalTimeLine';
import { getAllBlockData } from '../../utils/notion';
import { AboutData, WebsiteData } from '../../interfaces';

export const metadata = {
    title: 'About Kyle | Outdoor Enthusiast & Software Developer',
    description: 'My journey from software development to the outdoor industry. 15+ years of backcountry experience, technical skills, and a deep commitment to conservation.',
    keywords: 'Kyle Czajkowski, outdoor educator, software developer, AIARE Level 1, wilderness first aid, backcountry experience, Colorado 14ers, conservation',
    openGraph: {
        title: 'About Kyle | From Code to Peaks',
        description: 'My journey from software development to the outdoor industry. 15+ years of backcountry experience, technical skills, and a deep commitment to conservation.',
        images: ['/Me.jpg'],
        url: 'https://kyle.czajkowski.tech/about',
        type: 'profile',
        siteName: 'Kyle Czajkowski',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@SkiRoyJenkins',
        title: 'About Kyle | From Code to Peaks',
        description: 'My journey from software development to the outdoor industry. 15+ years of backcountry experience and technical expertise.',
        images: ['/Me.jpg'],
    },
    alternates: {
        canonical: 'https://kyle.czajkowski.tech/about'
    }
};

export default async function AboutPage() {
    const response = await getAllBlockData(process.env?.NODE_ENV === 'production');
    const websiteData: WebsiteData = response?.about ? response : {
        about: {} as AboutData,
        personalTimeline: [],
        projects: [],
        skills: [],
    };

    const { about, personalTimeline } = websiteData;

    return (
        <div>
            <main>
                {/* Full About Story */}
                <About about={about} />

                {/* Personal Timeline */}
                <PersonalTimeLine timeline={personalTimeline} />
            </main>
        </div>
    );
}