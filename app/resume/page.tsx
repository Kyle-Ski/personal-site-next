import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AiOutlineDownload } from "react-icons/ai";
import { Tooltip } from "@nextui-org/react";
import Skills from '../../components/Skills';
import PersonalTimeLine from '../../components/PersonalTimeLine';
import { getAllBlockData } from '../../utils/notion';
import { AboutData, WebsiteData } from '../../interfaces';
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";
import AdventureHero from "@/components/adventure/AdventureHero";

export const metadata = {
    title: 'Resume | Kyle Czajkowski - Full-Stack Developer & Outdoor Professional',
    description: 'Kyle Czajkowski\'s professional resume. 5+ years of full-stack development experience with React, TypeScript, Node.js. seeking work in the outdoor industry with AIARE Level 1 certification.',
    keywords: 'Kyle Czajkowski resume, full-stack developer, react developer, typescript, outdoor educator, AIARE Level 1, software engineer resume, web developer',
    openGraph: {
        title: 'Kyle Czajkowski - Resume & Professional Experience',
        description: 'Professional resume showcasing 5+ years of full-stack development and outdoor industry expertise.',
        images: ['/Me.jpg'],
        url: 'https://kyle.czajkowski.tech/resume',
        type: 'profile',
        siteName: 'Kyle Czajkowski',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@SkiRoyJenkins',
        title: 'Kyle Czajkowski - Resume & Professional Experience',
        description: 'Full-stack developer seeking collaboration in the outdoor industry. React, TypeScript, Node.js expertise.',
        images: ['/Me.jpg'],
    },
    alternates: {
        canonical: 'https://kyle.czajkowski.tech/resume'
    }
};

export default async function ResumePage() {
    const response = await getAllBlockData(process.env?.NODE_ENV === 'production');
    const websiteData: WebsiteData = response?.about ? response : {
        about: {} as AboutData,
        personalTimeline: [],
        projects: [],
        skills: [],
    };

    const { personalTimeline, skills } = websiteData;
    const resumeLink = "/Kyle_Czajkowski_2025.pdf";
    const resumeStats = [
        {
            label: 'Years Experience',
            value: '5+',
            iconName: 'Trophy'
        },
        {
            label: 'Peak Summits',
            value: '75+',
            iconName: 'Mountain'
        },
        {
            label: 'Certifications',
            value: '4+',
            iconName: 'ArrowUp'
        },
        {
            label: 'Tech Stack',
            value: 'Full-Stack',
            iconName: 'Map'
        }
    ];

    return (
        <div className="min-h-screen py-16">
            <AdventureHero
                // backgroundImage="/professional-summit.jpg" // Professional outdoor setting
                mainText1="Experience &"
                mainText2="Expertise"
                stats={resumeStats}
            />
            <div className="container mx-auto px-4 mt-4 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                        Resume & <span style={{ color: 'var(--color-text-accent)' }}>Journey</span>
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                        Full-stack developer with 5+ years of experience building scalable applications.
                        Currently seeking to combine technical expertise with outdoor industry passion.
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <a href="mailto:kyle@czajkowski.tech" className="hover:opacity-80" style={{ color: 'var(--color-text-accent)' }}>
                                kyle@czajkowski.tech
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>San Francisco, CA</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe size={16} />
                            <a href="https://kyle.czajkowski.tech" className="hover:opacity-80" style={{ color: 'var(--color-text-accent)' }}>
                                kyle.czajkowski.tech
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Github size={16} />
                            <a href="https://github.com/Kyle-Ski" className="hover:opacity-80" style={{ color: 'var(--color-text-accent)' }}>
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Download Resume Button */}
                    <Tooltip
                        showArrow={false}
                        content="Download Kyle's resume as PDF"
                        color="primary"
                        placement="bottom"
                    >
                        <a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="inline-flex items-center px-6 py-3 text-white rounded-lg shadow transition-colors hover:opacity-90"
                            style={{ backgroundColor: 'var(--color-text-accent)' }}
                        >
                            <Download className="mr-2" size={20} aria-hidden="true" />
                            <span>Download PDF Resume</span>
                        </a>
                    </Tooltip>
                </div>

                {/* Professional Summary */}
                <div className="mb-16 p-8 rounded-2xl" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                    <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                        Professional Summary
                    </h2>
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                        Experienced full-stack developer with a proven track record of building scalable web applications
                        and leading technical teams. Expertise in React, TypeScript, and Node.js with a passion for clean,
                        maintainable code. Currently transitioning career focus to combine technical skills with outdoor
                        education and conservation work. AIARE Level 1 certified with 15+ years of backcountry experience
                        and 75+ peak summits across multiple states.
                    </p>
                </div>

                {/* Core Competencies */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--color-text-primary)' }}>
                        Core Competencies
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="h-full" style={{ backgroundColor: 'var(--color-bg-secondary)', borderColor: 'var(--color-bg-tertiary)' }}>
                            <CardHeader>
                                <CardTitle style={{ color: 'var(--color-text-primary)' }}>Full-Stack Development</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                    5+ years of experience building scalable web and mobile applications using modern
                                    frameworks like Next.js, React, and TypeScript.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="h-full" style={{ backgroundColor: 'var(--color-bg-secondary)', borderColor: 'var(--color-bg-tertiary)' }}>
                            <CardHeader>
                                <CardTitle style={{ color: 'var(--color-text-primary)' }}>Technical Leadership</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                    Strong communication skills and experience working in agile teams to solve complex
                                    technical challenges and mentor junior developers.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="h-full" style={{ backgroundColor: 'var(--color-bg-secondary)', borderColor: 'var(--color-bg-tertiary)' }}>
                            <CardHeader>
                                <CardTitle style={{ color: 'var(--color-text-primary)' }}>Outdoor Education</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                    AIARE Level 1 certified with extensive backcountry experience. Skilled in
                                    risk assessment, group management, and outdoor instruction.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="h-full" style={{ backgroundColor: 'var(--color-bg-secondary)', borderColor: 'var(--color-bg-tertiary)' }}>
                            <CardHeader>
                                <CardTitle style={{ color: 'var(--color-text-primary)' }}>Adaptable Problem Solver</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                                    Flexible in learning new tools, frameworks, and environments to deliver high-quality
                                    solutions across diverse industries and challenges.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="mb-16">
                    <PersonalTimeLine timeline={personalTimeline} />
                </div>

                {/* Certifications & Training */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--color-text-primary)' }}>
                        Certifications & Training
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Technical Certifications */}
                        <Card style={{ backgroundColor: 'var(--color-bg-secondary)', borderColor: 'var(--color-bg-tertiary)' }}>
                            <CardHeader>
                                <CardTitle style={{ color: 'var(--color-text-accent)' }}>Technical Expertise</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
                                    <li>• Full-Stack Web Development (Galvanize, 2019)</li>
                                    <li>• JavaScript ES6+ & TypeScript</li>
                                    <li>• React & Next.js Framework Expertise</li>
                                    <li>• Node.js & Express Backend Development</li>
                                    <li>• Database Design (PostgreSQL, MongoDB)</li>
                                    <li>• RESTful API Design & Integration</li>
                                    {/* <li>• Git Version Control & Agile Methodologies</li> */}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Outdoor Certifications */}
                        <Card style={{ backgroundColor: 'var(--color-bg-secondary)', borderColor: 'var(--color-bg-tertiary)' }}>
                            <CardHeader>
                                <CardTitle style={{ color: 'var(--color-text-accent)' }}>Outdoor Certifications</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2" style={{ color: 'var(--color-text-secondary)' }}>
                                    <li>• AIARE Level 1 Avalanche Certification</li>
                                    <li>• Wilderness First Aid (Sierra Rescue International)</li>
                                    <li>• CPR Certified</li>
                                    <li>• Epinephrine Administration Trained</li>
                                    <li>• Glacier Travel Training</li>
                                    <li>• 15+ Years Backcountry Experience</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Technical Skills */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--color-text-primary)' }}>
                        Technical Skills
                    </h2>
                    <Skills skills={skills} />
                </div>

                {/* Achievements */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--color-text-primary)' }}>
                        Key Achievements
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card style={{ backgroundColor: 'var(--color-bg-secondary)', borderColor: 'var(--color-bg-tertiary)' }}>
                            <CardContent className="pt-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text-accent)' }}>75+</div>
                                    <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Peak Summits Across 4 States</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card style={{ backgroundColor: 'var(--color-bg-secondary)', borderColor: 'var(--color-bg-tertiary)' }}>
                            <CardContent className="pt-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text-accent)' }}>5+</div>
                                    <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Years Full-Stack Development</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card style={{ backgroundColor: 'var(--color-bg-secondary)', borderColor: 'var(--color-bg-tertiary)' }}>
                            <CardContent className="pt-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text-accent)' }}>4</div>
                                    <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Published NPM Packages</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center p-8 rounded-2xl" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                    <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                        Ready to Connect?
                    </h2>
                    <p className="text-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                        Whether you&apos;re looking for technical expertise or outdoor industry experience, I&apos;d love to discuss how we can work together.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="mailto:kyle@czajkowski.tech"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-medium text-white transition-colors hover:opacity-90"
                            style={{ backgroundColor: 'var(--color-text-accent)' }}
                        >
                            <Mail size={20} />
                            Email Me
                        </a>
                        <a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-lg font-medium border transition-colors hover:opacity-80"
                            style={{
                                borderColor: 'var(--color-text-accent)',
                                color: 'var(--color-text-accent)'
                            }}
                        >
                            <Download size={20} />
                            Download PDF
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}