import { ProjectInfo } from '@components/ProjectInfo'
import { Card } from '@components/Card'
import { LayoutHeader } from '@components/LayoutHeader'
import { getProjects } from '@lib/cosmicApi'
import { Project } from '@/types/Project'

interface ProjectsProps {
  projects: Project[]
}

export default function ProjectsPage ({ projects }: ProjectsProps) {
  return (
    <LayoutHeader headTitle="Christoffer Granstedt - Projects" headDescription="Some of the projects Christoffer Granstedt has been working on.">
      <div className="mx-auto pt-4 px-2 text-xs sm:text-base">
        <h1 className="text-3xl sm:text-5xl text-black mb-2 sm:mb-8">projects</h1>
        {projects.map(project => {
          return <Card className="my-8" key={project.id}><ProjectInfo key={project.id} project={project}/></Card>
        })}
      </div>
    </LayoutHeader>
  )
}
 
export async function getStaticProps() {
  return {
    props: {
      projects: await getProjects()
    }
  }
}