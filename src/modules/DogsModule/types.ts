import {IAllBreeds, IOneBreed} from '../../shared/models/breeds';

export type SelectPropsType = {
  id: string,
  name: string
}

export const descriptionInitial = {
  origin: '',
  description: '',
  wikipedia_url: ''
};

export type TitlePropsType = {
  breeds: IAllBreeds[] | undefined
  onChange: (value: string) => void
}

export type ImageSliderType = {
  items: IOneBreed[] | undefined
}