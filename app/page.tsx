import RecentPosts from '@/components/RecentContent';
import Link from 'next/link';
import Image from 'next/image';
import { Mountain, Code, Award, Users, ArrowRight, Mail } from 'lucide-react';
import { imgStrToBase64, shimmer } from '../utils/imageHelpers';
import AdventureHero from '@/components/adventure/AdventureHero';
import StravaFeed from '@components/StravaFeed'

export default async function HomePage() {
  return (
    <div>
      <main>
        {/* Hero Section */}
        <AdventureHero
          backgroundImage="/CrestonesAtSunrise.jpeg"
          mainText1="Kyle"
          mainText2="Czajkowski"
        />
        {/* Condensed About Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Hey! I&apos;m <span style={{ color: 'var(--color-text-accent)' }}>Kyle</span>
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                I&apos;m an outdoor enthusiast with a unique combination of backcountry experience,
                technical skills, and a deep commitment to conservation. After years in software
                development, I&apos;ve pivoted to realign with my core values and pursue
                opportunities in the outdoor industry.
              </p>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Whether you&apos;re looking for technical expertise, outdoor guidance, or someone who
                understands both worlds, I&apos;d love to connect.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-colors hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-text-accent)' }}
                >
                  My Full Story
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border transition-colors hover:opacity-80"
                  style={{
                    borderColor: 'var(--color-text-accent)',
                    color: 'var(--color-text-accent)'
                  }}
                >
                  View Resume
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/Me.jpg"
                  alt="Kyle outdoors"
                  width={350}
                  height={350}
                  className="rounded-2xl shadow-xl"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${imgStrToBase64(shimmer(350, 350))}`}
                />
                <div className="absolute -bottom-4 -right-4 text-white p-3 rounded-full shadow-lg" style={{ backgroundColor: 'var(--color-text-accent)' }}>
                  <Mountain size={24} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Bring - Condensed Version */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-text-primary)' }}>
            What I Bring
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
              <Mountain className="mx-auto mb-4" size={32} style={{ color: 'var(--color-text-accent)' }} />
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Outdoor Expertise
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                15+ years, 75+ summits, AIARE Level 1
              </p>
            </div>

            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
              <Code className="mx-auto mb-4" size={32} style={{ color: 'var(--color-text-accent)' }} />
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Technical Skills
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                5+ years full-stack development
              </p>
            </div>

            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
              <Award className="mx-auto mb-4" size={32} style={{ color: 'var(--color-text-accent)' }} />
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Certifications
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Wilderness First Aid, CPR, Glacier Travel
              </p>
            </div>

            <div className="text-center p-6 rounded-xl" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
              <Users className="mx-auto mb-4" size={32} style={{ color: 'var(--color-text-accent)' }} />
              <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Teaching
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Curriculum development & instruction
              </p>
            </div>
          </div>
        </section>

        {/* Recent Content */}
        <section className="py-16">
          <RecentPosts />
        </section>

        <StravaFeed/>

        {/* Quick Links / Call to Action */}
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="text-center p-12 rounded-2xl" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Let&apos;s Connect
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Whether you&apos;re an outdoor company looking for someone who understands both technical
              systems and mountain systems, or just another outdoor enthusiast looking to connect,
              I&apos;d love to hear from you.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:kyle@czajkowski.tech"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: 'var(--color-text-accent)' }}
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium border transition-colors hover:opacity-80"
                style={{
                  borderColor: 'var(--color-text-accent)',
                  color: 'var(--color-text-accent)'
                }}
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
