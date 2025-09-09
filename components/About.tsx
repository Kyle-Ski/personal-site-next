import Image from 'next/image';
import Link from 'next/link';
import { AboutData } from '../interfaces';
import { ABOUT_TITLE } from '../utils/constants';
import { imgStrToBase64, shimmer } from '../utils/imageHelpers';
import { Mountain, Code, Heart, Compass, Award, Users } from 'lucide-react';

interface Props {
  about: AboutData;
}

const About = ({ about }: Props) => {
  return (
    <section id={ABOUT_TITLE} className="py-16 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 lg:order-1">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
            Hey! 👋 I&apos;m <span style={{ color: 'var(--color-text-accent)' }}>Kyle</span>
          </h1>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
            I&apos;m an outdoor enthusiast with a unique combination of backcountry experience,
            technical skills, and a deep commitment to conservation. After years in software
            development, I&apos;ve stepped away from tech to realign with my core values and pursue
            opportunities in the outdoor industry.
          </p>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <Image
              src="/Me.jpg"
              alt="Kyle outdoors"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${imgStrToBase64(shimmer(400, 400))}`}
            />
            <div className="absolute -bottom-4 -right-4 text-white p-3 rounded-full shadow-lg" style={{ backgroundColor: 'var(--color-text-accent)' }}>
              <Mountain size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Core Story Sections */}
      <div className="space-y-16">

        {/* Foundation */}
        <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
          <div className="flex items-center gap-3 mb-6">
            <Compass size={28} style={{ color: 'var(--color-text-accent)' }} />
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Foundation</h2>
          </div>
          <div className="prose prose-lg max-w-none" style={{ color: 'var(--color-text-secondary)' }}>
            <p>
              My connection to the outdoors started early. I studied fish and wildlife conservation
              in college, learning plant biology and developing an appreciation for how everything
              in nature is interconnected. Even when life took me in different directions, that
              foundation never left me.
            </p>
            <p>
              The outdoors is where I feel most connected to both people and the planet. There&apos;s
              something profound about standing on a snow-covered peak in winter, knowing that the
              snow beneath your feet will eventually flow down to feed the valleys below. Mountains
              aren&apos;t just beautiful - they build weather systems, hold water for high alpine lakes,
              and slowly erode to bring minerals downstream. Everything is connected, even when we
              can&apos;t see it.
            </p>
          </div>
        </div>

        {/* Tech Chapter */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Code size={28} style={{ color: 'var(--color-text-accent)' }} />
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Tech Chapter</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="prose prose-lg" style={{ color: 'var(--color-text-secondary)' }}>
              <p>
                After college, I moved into software development where I spent years building
                problem-solving skills, learning systems thinking, and developing the ability to
                break down complex information for different audiences.
              </p>
              <p>
                While attending a coding bootcamp, I taught introductory JavaScript classes,
                helping new students take their first steps into programming and adapting my
                explanations to different learning styles.
              </p>
            </div>
            <div className="rounded-xl p-6 experience-card" style={{ color: 'var(--color-text-primary)' }}>
              <h3 className="font-semibold mb-4" style={{ color: 'var(--color-text-accent)' }}>
                Skills That Translate
              </h3>
              <ul className="space-y-2">
                <li>• Risk assessment & attention to detail</li>
                <li>• Project management under pressure</li>
                <li>• Complex problem troubleshooting</li>
                <li>• Instructional design & teaching</li>
                <li>• Systems thinking & interconnections</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reset */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Heart size={28} style={{ color: 'var(--color-text-accent)' }} />
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Reset</h2>
          </div>
          <div className="prose prose-lg max-w-none" style={{ color: 'var(--color-text-secondary)' }}>
            <p>
              With{' '}
              <Link
                href="https://www.kylieis.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors font-medium hover:opacity-80"
                style={{ color: 'var(--color-text-accent)' }}
              >
                my wife's
              </Link>{' '}
              support, I took an extended sabbatical to reflect on what I really wanted to do
              with my life. This time allowed for personal growth and helped me realign with my
              values. I realized I wanted to get back to what had always driven me: helping people
              experience the outdoors and working to conserve these spaces for future generations.
            </p>
          </div>
        </div>

        {/* Current Mission */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Users size={28} style={{ color: 'var(--color-text-accent)' }} />
            <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Current Mission</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 prose prose-lg" style={{ color: 'var(--color-text-secondary)' }}>
              <p>
                I want to help people find their way to enjoy the outdoors safely. Whether that&apos;s
                helping someone choose the right gear for their first backpacking trip, teaching
                avalanche safety, or guiding groups through technical terrain, my goal is to make
                outdoor experiences accessible and meaningful.
              </p>
              <p>
                My approach is empathetic. I&apos;m good at putting myself in the shoes of someone new
                to the outdoors and understanding the struggles they might be having. I like being
                able to address those concerns while helping people get the most out of their experience.
              </p>
              <p>
                Conservation is at the heart of everything I do. We need to protect the outdoor
                spaces where we recreate - not just so we can keep enjoying them, but because these
                natural resources are vital to our world.
              </p>
            </div>

            <div className="rounded-xl p-6 experience-card" style={{ color: 'var(--color-text-primary)' }}>
              <h3 className="font-semibold mb-4" style={{ color: 'var(--color-text-accent)' }}>Experience Highlights</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Mountain size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-text-accent)' }} />
                  <span>Mt. Kilimanjaro summit</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mountain size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-text-accent)' }} />
                  <span>4-day Mt. Baker glacier climb</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mountain size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-text-accent)' }} />
                  <span>Little Bear Peak technical ascent</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mountain size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-text-accent)' }} />
                  <span>Winter 14er expeditions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mountain size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--color-text-accent)' }} />
                  <span>Colorado high country specialist</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* What I Bring */}
        <div className="rounded-2xl p-8" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--color-text-primary)' }}>
            What I Bring
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Experience */}
            <div className="text-center p-6 rounded-xl shadow-sm" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
              <Mountain className="mx-auto mb-4" size={32} style={{ color: 'var(--color-text-accent)' }} />
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Extensive Experience
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                15+ years, 75+ summits across Colorado, Utah, California, and the Pacific Northwest
              </p>
            </div>

            {/* Training */}
            <div className="text-center p-6 rounded-xl shadow-sm" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
              <Award className="mx-auto mb-4" size={32} style={{ color: 'var(--color-text-accent)' }} />
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Formal Training
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                AIARE Level 1, Wilderness First Aid, CPR, Epinephrine, Glacier Travel
              </p>
            </div>

            {/* Teaching */}
            <div className="text-center p-6 rounded-xl shadow-sm" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
              <Users className="mx-auto mb-4" size={32} style={{ color: 'var(--color-text-accent)' }} />
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Teaching Experience
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Curriculum development, group management, individualized instruction
              </p>
            </div>

            {/* Gear */}
            <div className="text-center p-6 rounded-xl shadow-sm" style={{ backgroundColor: 'var(--color-bg-primary)' }}>
              <Compass className="mx-auto mb-4" size={32} style={{ color: 'var(--color-text-accent)' }} />
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Gear Expertise
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Deep knowledge of gear innovation, materials, and sustainability
              </p>
            </div>
          </div>
        </div>

        {/* Looking Forward */}
        <div className="text-center text-white rounded-2xl p-12 about-gradient">
          <h2 className="text-3xl font-bold mb-6">Looking Forward</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            The mountains have taught me that everything is connected. Now I want to help others
            make those connections too.
          </p>
          <p className="text-lg opacity-90 max-w-4xl mx-auto">
            I&apos;m actively exploring opportunities in outdoor education, guiding, gear consultation,
            and any role where I can combine my technical background with my outdoor passion.
            Whether you&apos;re an outdoor company looking for someone who understands both technical
            systems and mountain systems, or just another outdoor enthusiast looking to connect,
            I&apos;d love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;