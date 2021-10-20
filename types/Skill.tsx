export interface Skill {
  id: string
  title: string
  slug: string
  metadata: {
    skill_group: string
    url: string
    image: {
      url: string
    }
  }
}