import {FC, useEffect, useState} from 'react';
import { dogsAPI } from '../api/fetchDogsData';
import { DescriptionType} from '../../../components/types';
import { BreedDescription } from '../../../components/BreedDescription';
import { descriptionInitial } from '../types';
import { BreedTitle } from '../../../components/BreedTitle';
import { ImageSlider } from '../../../components/ImageSlider';

const Dogs: FC = () => {
  const [ selectedBreed, setSelectedBreed ] = useState<number | string>(1);
  const [ description, setDescription ] = useState<DescriptionType>(descriptionInitial);
  const { data: breeds } = dogsAPI.useFetchAllBreedsQuery('');
  const { data: dogs, refetch } = dogsAPI.useFetchOneBreedQuery(selectedBreed);
  console.log(breeds);

  const handleSelectChange = (value: number | string) => {
    setSelectedBreed(value);
    refetch();
  };

  useEffect(() => {
    const selected = breeds && breeds.find(obj => obj.id === selectedBreed);

    if (selected) {
      setDescription({
        origin: selected.origin,
        description: selected.description,
        wikipedia_url: selected.wikipedia_url
      });
    }
  }, [selectedBreed, breeds]);

  return (
    <div>
      <BreedTitle breeds={breeds} onChange={handleSelectChange} />
      <ImageSlider items={dogs} />
      <BreedDescription
        origin={description.origin}
        description={description.description}
        wikipedia_url={description.wikipedia_url}
      />
    </div>
  );
};

export default Dogs;
