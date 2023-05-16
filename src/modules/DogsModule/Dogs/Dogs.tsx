import {FC, useEffect, useState} from 'react';
import { dogsAPI } from '../api/fetchDogsData';
import { DogsDescriptionType } from '../types';
import { BreedDescription } from '../../../components/BreedDescription';
import { descriptionInitial } from '../types';
import { BreedTitle } from '../../../components/BreedTitle';
import { ImageSlider } from '../../../components/ImageSlider';

const Dogs: FC = () => {
  const [ selectedBreed, setSelectedBreed ] = useState<number | string>(1);
  const [ description, setDescription ] = useState<DogsDescriptionType>(descriptionInitial);
  const { data: breeds } = dogsAPI.useFetchAllBreedsQuery('');
  const { data: dogs } = dogsAPI.useFetchOneBreedQuery(selectedBreed);

  const handleSelectChange = (value: number | string) => {
    setSelectedBreed(value);
  };

  useEffect(() => {
    const selected = breeds && breeds.find(obj => obj.id === selectedBreed);
    console.log(breeds);

    if (selected) {
      setDescription({
        origin: selected.origin,
        temperament: selected.temperament,
        wikipedia_url: selected.wikipedia_url,
        name: selected.name
      });
    }
  }, [selectedBreed, breeds]);

  return (
    <div>
      <BreedTitle breeds={breeds} onChange={handleSelectChange} />
      <ImageSlider items={dogs} />
      <BreedDescription
        origin={description.origin}
        temperament={description.temperament}
        wikipedia_url={description.wikipedia_url}
        name={description.name}
      />
    </div>
  );
};

export default Dogs;
