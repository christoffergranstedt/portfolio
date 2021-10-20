import React from 'react'
import Image from 'next/image'

import { SkillInfo } from '@components/SkillInfo'
import { Project } from '@/types/Project'

interface ProjectInfoProps {
  project: Project
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ project }) => {

  return (
    <div>
      <h3 className="text-base font-bold w-full text-gray-500 sm:text-2xl">{project.title}</h3>
      <p className="text-xs mb-4">{project.metadata.period}</p>
      <div className="lg:flex md:flex-wrap">
        <div className="lg:flex-1 divide-y divide-gray-600 divide-opacity-25">
          <div className="mb-4">
            <p dangerouslySetInnerHTML={{ __html: project.content }}/>
          </div>
          <div className="mb-2 pt-2 flex flex-wrap">
            {project.metadata.skills.length > 0 && project.metadata.skills.map(skill => {
              return <SkillInfo className="m-1 hover:bg-gray-100 cursor-pointer" key={skill.id} skill={skill} mini/>
            })}
          </div>
          <div className="mb-2 pt-4">
            {project.metadata.source_code_url && <a href={project.metadata.source_code_url} target="_blank" rel="noreferrer"><span className="py-2 px-4 rounded-lg bg-fourth hover:bg-fifthHover text-white cursor-pointer text-xs mx-2"><i className="devicon-github-original"/> View source code</span></a>}
            {project.metadata.url && <a href={project.metadata.url} target="_blank" rel="noreferrer"><span className="py-2 px-4 rounded-lg bg-third hover:bg-thirdHover text-white cursor-pointer text-xs">View app</span></a>}
          </div>
          
        </div>
        <div className="mt-6 text-center lg:flex-1 lg:my-auto lg:ml-4">
          <Image src={project.metadata.image.url} width="600" height="338" alt="Logo of the technical skill" quality="100" layout="responsive"/>
        </div>
      </div>
    </div>
  )
}
