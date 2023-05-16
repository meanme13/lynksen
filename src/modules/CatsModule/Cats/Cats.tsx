import {FC, useEffect, useState} from 'react';
import { catsAPI } from '../api/fetchCatsData';
import { CatsDescriptionType } from '../types';
import { BreedDescription } from '../../../components/BreedDescription';
import { descriptionInitial } from '../types';
import { BreedTitle } from '../../../components/BreedTitle';
import { ImageSlider } from '../../../components/ImageSlider';

const Cats: FC = () => {
  const [ selectedBreed, setSelectedBreed ] = useState<string | number>('abys');
  const [ description, setDescription ] = useState<CatsDescriptionType>(descriptionInitial);
  const { data: breeds } = catsAPI.useFetchAllBreedsQuery('');
  const { data: cats } = catsAPI.useFetchOneBreedQuery(selectedBreed);

  const selectChange = (value: string | number) => {
    setSelectedBreed(value);
  };

  useEffect(() => {
    const selected = breeds && breeds.find(obj => obj.id === selectedBreed);
    if (selected) {
      setDescription({
        origin: selected.origin,
        description: selected.description,
        wikipedia_url: selected.wikipedia_url,
        name: selected.name
      });
    }
  }, [selectedBreed, breeds]);

  return (
    <div>
      <BreedTitle breeds={breeds} onChange={selectChange} />
      <ImageSlider items={cats} />
      <BreedDescription
        origin={description.origin}
        description={description.description}
        wikipedia_url={description.wikipedia_url}
        name={description.name}
      />
    </div>
  );
};

export default Cats;
