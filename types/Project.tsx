import { Skill } from './Skill' 

export interface Project {
  id: string
  title: string
  slug: string
  content: string
  metadata: {
    period: string
    source_code_url: string,
    url: string
    image: {
      url: string
    }
    skills: Skill[]
  }
}