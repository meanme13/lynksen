import { FC } from 'react';
import style from './Select.module.scss';
import { SelectType } from '../types';

interface ISelect {
  params: SelectType[] | undefined
  onChange: (value: string | number) => void
}

const Select: FC<ISelect> = ({params, onChange}) => {

  return (
    <div className={style.container}>
      <select onChange={(e) => onChange(e.target.value)} className={style.select}>
        {
          params && params.map(value => (
            <option key={value.id} value={value.id}>{value.name}</option>
          ))
        }
      </select>
    </div>
  );
};

export default Select;