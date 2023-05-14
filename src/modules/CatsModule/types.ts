import {IAllBreeds, IOneBreed} from '../../shared/models/breeds';

export type SelectPropsType = {
  id: string | number,
  name: string
}

export const descriptionInitial = {
  origin: '',
  description: '',
  wikipedia_url: ''
};

export type TitlePropsType = {
  breeds: IAllBreeds[] | undefined
  onChange: (value: string | number) => void
}

export type ImageSliderType = {
  items: IOneBreed[] | undefined
}