export interface IAllBreeds {
  id: string | number
  name: string
  origin: string
  description: string,
  temperament?: string
  wikipedia_url: string
}

export interface IOneBreed {
  url: string
}