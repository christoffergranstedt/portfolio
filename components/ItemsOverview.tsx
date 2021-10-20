import React from 'react'

import { SkillInfo } from '@components/SkillInfo'
import { EducationInfo } from '@components/EducationInfo'
import { Skill } from '@/types/Skill'
import { Education } from '@/types/Education'

interface SkillGroupOverviewProps {
  title?: string
  skills?: Skill[] 
  educations?: Education[]
}

export const ItemsOverview: React.FC<SkillGroupOverviewProps> = ({ title, skills, educations }) => {

  return (
    <div className="flex flex-wrap w-full">
      {title && <h3 className="text-base sm:text-2xl text-black mb-4 w-full">{title}</h3>}
      {skills && skills.length > 0 && skills.map(skill => {
        return <SkillInfo className="m-1 hover:bg-gray-100 cursor-pointer" key={skill.id} skill={skill}/>
      })}
      {educations && educations.length > 0 && educations.map(education => {
        return <EducationInfo className="m-1 p-3 border-2 rounded-lg border-gray-200 hover:bg-gray-100 cursor-pointer w-full" key={education.id} education={education}/>
      })}
    </div>
  )
}