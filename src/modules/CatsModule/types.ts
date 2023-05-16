import {IAllBreeds, IOneBreed} from '../../shared/models/breeds';

export type SelectPropsType = {
  id: string | number,
  name: string
}

export const descriptionInitial = {
  origin: '',
  description: '',
  wikipedia_url: '',
  name: ''
};

export type CatsDescriptionType = {
  origin: string
  description: string
  wikipedia_url: string
  name: string
}

export type TitlePropsType = {
  breeds: IAllBreeds[] | undefined
  onChange: (value: string | number) => void
}

export type ImageSliderType = {
  items: IOneBreed[] | undefined
}