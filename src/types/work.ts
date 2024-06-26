export type Work = {
  description: string
  id: string
  thumbPc: {
    height: string
    url: string
    width: string
  }
  thumbSp: {
    height: string
    url: string
    width: string
  }
  isRestricted: boolean
  lead: string
  role: string[]
  tech: string[]
  title: string
  url: string
}

export type WorkApiResponse = {
  contents: Work[]
  limit: number
  offset: number
  totalCount: number
}
