import { ProjectItem } from '../interfaces'
import { PROJECTS_TITLE } from '../utils/constants'
import styles from '../styles/Projects.module.css'

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
    <div className={styles.projectsWrapper}>
      <h2 id={PROJECTS_TITLE}>Projects</h2>
      {/* {buildProjects(projects)} */}
      <>🚧🚧🚧🚧 Under Construction.. Come back soon!🚧🚧🚧🚧</>
    </div>
  )
}

export default Projects
