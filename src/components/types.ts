import {ReactNode} from 'react';

export type LayoutType = {
  children: ReactNode
}

export type SelectType = {
  id: string | number,
  name: string
}

export type DescriptionType = {
  origin: string
  description?: string
  temperament?: string | undefined
  wikipedia_url: string
  name: string
}