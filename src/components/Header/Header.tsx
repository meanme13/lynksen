import { FC } from 'react';
import style from './Header.module.scss';

const Header: FC = () => {
  return (
    <div className={style.header}>
      Cats&Dogs
    </div>
  );
};

export default Header;