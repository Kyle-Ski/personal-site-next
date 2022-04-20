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
            layout="fixed"
            width={width}
            height={height}
          />
        </div>
      )
    })
  }
  return (
    <div className={styles.skillsWrapper}>
      <h2 id={SKILLS_TITLE}>Skills</h2>
      {/* <>{buildSkills(skills)}</> */}
      <>🚧🚧🚧🚧 Under Construction.. Come back soon!🚧🚧🚧🚧</>
    </div>
  )
}

export default Skills
