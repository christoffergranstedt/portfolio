export interface Education {
  id: string
  title: string
  slug: string
  metadata: {
    period: string
    program: string
    degree: string
    school: string
    url: string
    image: {
      url: string
    }
  }
}