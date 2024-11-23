import { SkillItem } from '../interfaces';
import { dimensionNormalizer } from '../utils/conversionHelpers';
import Image from 'next/image';
import { SKILLS_TITLE } from '../utils/constants';
import { imgStrToBase64, shimmer } from '../utils/imageHelpers';

type Props = {
  skills: SkillItem[];
};

const Skills = ({ skills }: Props) => {
  const buildSkills = (skills: SkillItem[]) => {
    return skills.map((skill: SkillItem, index: number) => {
      let { width, height } = dimensionNormalizer(skill.height, skill.width, 100);
      return (
        <div
          key={`${skill.src}${index}`}
          className="relative flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-md hover:scale-105 transition-transform dark:bg-gray-800 dark:text-gray-200"
        >
          {/* Radial gradient glow behind logo */}
          <div className="absolute inset-0 rounded-lg pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.25),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.4),rgba(255,255,255,0))]"></div>
          <Image
            src={skill.src}
            alt={skill.alt}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${imgStrToBase64(shimmer(700, 475))}`}
            width={width}
            height={height}
            className="object-contain w-24 h-auto relative"
          />
          <p className="mt-2 text-sm font-medium relative">{skill.name}</p>
        </div>
      );
    });
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-gray-100">Skills</h2>
      <div
        id={SKILLS_TITLE}
        className="grid grid-cols-[repeat(auto-fill,minmax(140px,_1fr))] gap-4 justify-items-center"
      >
        {buildSkills(skills)}
      </div>
    </section>
  );
};

export default Skills;
