// @ts-ignore
import Cosmic from 'cosmicjs'

import { Project } from '@/types/Project'
import { AboutMe } from '@/types/AboutMe'
import { Skill } from '@/types/Skill'
import { Education } from '@/types/Education'
import { CosmicObject } from '@constants/CosmicObject'

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY
})

export const getAboutMe = async (): Promise<AboutMe | null> => {
  try {
    const params = {
      query: {
        type: CosmicObject.AboutMe
      }
    }
  
    const data = await bucket.getObjects(params)
  
    return data.objects[0]
  } catch (error) {
    return null
  }
}

export const getProjects = async (): Promise<Project[]> => {
  try {
    const params = {
      query: {
        type: CosmicObject.Projects
      }
    }
  
    const data = await bucket.getObjects(params)
    return data.objects
  } catch (error) {
    return []
  }
}


export const getSkillBySkillGroup = async (skillGroup: string): Promise<Skill[]> => {

  try {
    const params = {
      query: {
        type: CosmicObject.Skills,
      }
    }
  
    const { objects: skills }: { objects: Skill[]} = await bucket.getObjects(params)
  
    const skillBySkillGroup = skills.filter(skill => skill.metadata.skill_group === skillGroup)

    return skillBySkillGroup
  } catch (error) {
    return []
  }
}

export const getEducations = async (): Promise<Education[]> => {
  try {
    const params = {
      query: {
        type: CosmicObject.Educations
      }
    }
  
    const data = await bucket.getObjects(params)
  
    return data.objects
  } catch (error) {
    return []
  }
}