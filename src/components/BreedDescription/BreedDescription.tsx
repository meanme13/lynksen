import { FC } from 'react';
import style from './BreedDescription.module.scss';
import { CardContent } from '../../UI/Skeletons/CardContent';
import { DescriptionType } from '../types';

const BreedDescription: FC<DescriptionType> = (props) => {
  return (
    <div className={style.container}>
      {
        props.origin.length ?
          <div>
            <p className={style.title}>This breed is from {props.origin}</p>
            <p className={style.text}>{props.description}</p>
            <a className={style.url} href={props.wikipedia_url ? props.wikipedia_url : 'https://google.com'}>More information here</a>
          </div> : <CardContent />
      }
    </div>
  );
};

export default BreedDescription;