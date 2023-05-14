import { FC } from 'react';
import style from './CardContent.module.scss';

const CardContent: FC = () => {
  return (
    <div className={style.content}>
      <p className={style.title}></p>
      <p className={style.text}></p>
    </div>
  );
};

export default CardContent;