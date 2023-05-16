import {IAllBreeds, IOneBreed} from '../../shared/models/breeds';

export type SelectPropsType = {
  id: string,
  name: string
}

export const descriptionInitial = {
  origin: '',
  temperament: '',
  wikipedia_url: '',
  name: ''
};

export type DogsDescriptionType = {
  origin: string
  temperament: string | undefined
  wikipedia_url: string
  name: string
}

export type TitlePropsType = {
  breeds: IAllBreeds[] | undefined
  onChange: (value: string) => void
}

export type ImageSliderType = {
  items: IOneBreed[] | undefined
}