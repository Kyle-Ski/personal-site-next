import { ProjectItem } from '../interfaces'
import { PROJECTS_TITLE } from '../utils/constants'

type Props = {
  projects: ProjectItem[]
}
const Projects = ({ projects }: Props) => {
  const buildProjects = (array: ProjectItem[]) => {
    return array.map((project: ProjectItem, index) => {
      return <div key={`${project.id}${index}`}>Project #{project.id}</div>
    })
  }
  return (
    <div>
      <h3 id={PROJECTS_TITLE}>Projects</h3>
      {buildProjects(projects)}
    </div>
  )
}

export default Projects
