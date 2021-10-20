import React from 'react'
import Image from 'next/image'

import { Skill } from '@/types/Skill'

interface SkillInfoProps {
  skill: Skill
  className: string
  mini?: boolean
}

export const SkillInfo: React.FC<SkillInfoProps> = ({ skill, className, mini }) => {

  if (mini) {
    return (
      <a href={skill.metadata.url} target="_blank" rel="noreferrer">
        <div className={`border-2 rounded-lg border-gray-200 py-1 px-1 text-center flex flex-wrap ${className}`}>
          <div className="w-8 h-8 relative inline-block">
            <Image src={skill.metadata.image.url} alt={`Logo of ${skill.title}`} layout="fill" objectFit="contain"/>
          </div>
          <p className="text-xs text-gray-900 pb-1 place-self-center ml-1">- {skill.title}</p>
        </div>
      </a>
    )
  }

  return (
    <a href={skill.metadata.url} target="_blank" rel="noreferrer">
      <div className={`border-2 rounded-lg border-gray-200 w-32 p-1 inline-block text-center ${className}`}>
        <div className="w-12 h-12 relative inline-block">
          <Image src={skill.metadata.image.url} alt={`Logo of ${skill.title}`} layout="fill" objectFit="contain"/>
        </div>
        <p className="text-xs text-gray-500">{skill.title}</p>
      </div>
    </a>
  )
}