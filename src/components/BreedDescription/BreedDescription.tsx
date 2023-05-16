import { FC } from 'react';
import style from './BreedDescription.module.scss';
import { CardContent } from '../../UI/Skeletons/CardContent';
import { DescriptionType } from '../types';

const BreedDescription: FC<DescriptionType> = (props) => {
  const hasURL = props.wikipedia_url ? props.wikipedia_url : `https://www.google.com/search?q=${props.name}`;

  return (
    <div className={style.container}>
      {
        props.origin.length ?
          <div>
            <p className={style.title}>This breed is from {props.origin}</p>
            <p className={style.text}>{props.description}</p>
            <p className={style.text}>{props.temperament}</p>
            <a className={style.url} href={hasURL}>More information here</a>
          </div> : <CardContent />
      }
    </div>
  );
};

export default BreedDescription;