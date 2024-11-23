import { SkillItem } from '../interfaces'
import { dimensionNormalizer } from '../utils/conversionHelpers'
import Image from 'next/image'
import { SKILLS_TITLE } from '../utils/constants'
import styles from '../styles/Skills.module.css'
import { imgStrToBase64, shimmer } from '../utils/imageHelpers'

type Props = {
  skills: SkillItem[]
}

const Skills = ({ skills }: Props) => {
  const buildSkills = (skills: SkillItem[]) => {
    return skills.map((skill: SkillItem, index: number) => {
      let { width, height } = dimensionNormalizer(skill.height, skill.width, 100)
      return (
        <div key={`${skill.src}${index}`}>
          <p>{skill.name}</p>
          <Image
            src={skill.src}
            alt={skill.alt}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${imgStrToBase64(shimmer(700, 475))}`}
            width={width}
            height={height}
            style={{ objectFit: "contain", height: "auto", width: "60%" }}
          />
        </div>
      )
    })
  }
  return (
    <>

      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

      <div id={SKILLS_TITLE} className={styles.skillsWrapper}>
        <>{buildSkills(skills)}</>
      </div>
    </>
  )
}

export default Skills
