import { FC } from 'react';
import style from './Spinner.module.scss';

const Spinner: FC = () => {
  return (
    <div className={style.spinner}></div>
  );
};

export default Spinner;