import React from 'react'

import { Education } from '@/types/Education'

interface EducationInfoProps {
  education: Education
  className: string
}

export const EducationInfo: React.FC<EducationInfoProps> = ({ education, className }) => {

  return (
    <a href={education.metadata.url} target="_blank" rel="noreferrer" className="w-full">
      <div className={`${className}`}>
        <div className="text-center">
          <p className="text-base font-bold sm:text-xl text-gray-500">{education.title}</p>
          <p className="text-xs text-gray-500">{education.metadata.degree}</p>
        </div>
        <div className="mt-2 sm:flex-1 text-center">
          <p className="text-gray-500 font-bold">{education.metadata.school}</p>
          <p className="text-xs text-gray-500">{education.metadata.period}</p>
        </div>        
      </div>
    </a>
  )
}