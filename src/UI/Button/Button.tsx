import { FC } from 'react';
import { ButtonType } from '../types';
import style from './Button.module.scss';

const Button: FC<ButtonType> = ({ children, height = 40, width = 80, onClick }) => {
  return (
    <button onClick={onClick} className={style.button} style={{width: width, height: height}}>
      {children}
    </button>
  );
};

export default Button;