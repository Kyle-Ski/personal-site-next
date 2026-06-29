import RecentPosts from '@/components/RecentContent';
import Image from 'next/image';
import { Mountain, Code, Award, Users, ArrowRight, Mail } from 'lucide-react';
import { imgStrToBase64, shimmer } from '../utils/imageHelpers';
import AdventureHero from '@/components/adventure/AdventureHero';
import StravaFeed from '@/components/StravaFeed'
import CtaButton from '@/components/ui/cta-button'
import Reveal from '@/components/ui/reveal'
import MountainDivider from '@/components/ui/mountain-divider'

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
        <Reveal>
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
                  <CtaButton href="/about" variant="solid">
                    My Full Story
                    <ArrowRight size={18} />
                  </CtaButton>
                  <CtaButton href="/resume" variant="outline">
                    View Resume
                    <ArrowRight size={18} />
                  </CtaButton>
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
        </Reveal>

        <MountainDivider />

        {/* What I Bring - Elevated cards */}
        <Reveal>
          <section className="py-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: 'var(--color-text-primary)' }}>
              What I Bring
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { Icon: Mountain, title: 'Outdoor Expertise', body: '15+ years, 75+ summits, AIARE Level 1' },
                { Icon: Code, title: 'Technical Skills', body: '5+ years full-stack development' },
                { Icon: Award, title: 'Certifications', body: 'Wilderness First Aid, CPR, Glacier Travel' },
                { Icon: Users, title: 'Teaching', body: 'Curriculum development & instruction' },
              ].map(({ Icon, title, body }, i) => (
                <Reveal key={title} delay={i * 0.05}>
                  <div
                    className="group relative h-full rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border"
                    style={{
                      backgroundColor: 'var(--color-bg-secondary)',
                      borderColor: 'var(--color-card-border)',
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(135deg, var(--color-text-accent), transparent 70%)',
                        opacity: 0,
                        mixBlendMode: 'overlay',
                      }}
                    />
                    <div className="relative z-10">
                      <div className="flex justify-center mb-4">
                        <div
                          className="p-3 rounded-full"
                          style={{
                            backgroundColor: 'var(--color-bg-primary)',
                            border: '1px solid var(--color-card-border)',
                          }}
                        >
                          <Icon size={28} style={{ color: 'var(--color-text-accent)' }} />
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                        {title}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        {body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <MountainDivider />

        {/* Recent Content */}
        <Reveal>
          <section className="py-16">
            <RecentPosts />
          </section>
        </Reveal>

        <StravaFeed/>

        {/* Quick Links / Call to Action */}
        <Reveal>
          <section className="py-16 px-4 max-w-6xl mx-auto">
            <div
              className="text-center p-12 rounded-2xl border"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-card-border)',
              }}
            >
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Let&apos;s Connect
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                Whether you&apos;re an outdoor company looking for someone who understands both technical
                systems and mountain systems, or just another outdoor enthusiast looking to connect,
                I&apos;d love to hear from you.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <CtaButton href="mailto:kyle@czajkowski.tech" variant="solid" external>
                  <Mail size={20} />
                  Get In Touch
                </CtaButton>
                <CtaButton href="/projects" variant="outline">
                  View My Work
                  <ArrowRight size={18} />
                </CtaButton>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
    </div>
  );
}
