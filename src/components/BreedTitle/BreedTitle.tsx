import { FC } from 'react';
import style from './BreedTitle.module.scss';
import { Select } from '../Select';
import { Spinner } from '../../UI/Spinner';
import { NavLink } from 'react-router-dom';
import { SelectPropsType, TitlePropsType } from '../../modules/CatsModule/types';


const BreedTitle: FC<TitlePropsType> = ({breeds, onChange}) => {
  const selectProps = (): SelectPropsType[] | undefined => {
    return breeds && breeds.map(({ id, name }) => ({ id, name }));
  };

  return (
    <div className={style.titleBlock}>
      <p className={style.title}>Please, select a breed</p>
      <div className={style.select}>
        {breeds ? (
          <Select onChange={onChange} params={selectProps()} />
        ) : (
          <Spinner />
        )}
        <NavLink to={'/'}>
          <p className={style.returnBack}>or return to main page</p>
        </NavLink>
      </div>
    </div>
  );
};

export default BreedTitle;