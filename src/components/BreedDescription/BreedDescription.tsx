import { FC } from 'react';
import style from './BreedDescription.module.scss';
import { CardContent } from '../../UI/Skeletons/CardContent';
import { DescriptionType } from '../types';

const BreedDescription: FC<DescriptionType> = (props) => {
  const hasURL = props.wikipedia_url ? props.wikipedia_url : `https://www.google.com/search?q=${props.name}`;

  return (
    <div>
      {
        props.origin.length ?
          <div className={style.container}>
            <div className={style.title}>
              <span className={style.titleName}>Country of origin</span>
              {props.origin}
            </div>
            {
              props.description &&
              <div className={style.text}>
                <span className={style.titleName}>Description</span>
                {props.description}
              </div>
            }
            {
              props.temperament &&
              <div className={style.text}>
                <span className={style.titleName}>Temperament</span>
                {props.temperament}
              </div>
            }
            <a className={style.url} href={hasURL}>
              More information here
            </a>
          </div> : <CardContent />
      }
    </div>
  );
};

export default BreedDescription;