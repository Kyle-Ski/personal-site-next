import { SkillItem } from '../interfaces'
import { dimensionNormalizer } from '../utils/conversionHelpers'
import Image from 'next/image'
import { SKILLS_TITLE } from '../utils/constants'
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
            layout="fixed"
            width={width}
            height={height}
          />
        </div>
      )
    })
  }
  return (
    <div>
      <h2 id={SKILLS_TITLE}>Skills</h2>
      <>{buildSkills(skills)}</>
    </div>
  )
}

export default Skills
