export type Work = {
  id: string
  title: string
  lead: string
  tech: string[]
  role: string[]
  url: string
  img: string
  description: string
}

export type WorkApiResponse = {
  contents: Work[]
  totalCount: number
  offset: number
  limit: number
}
