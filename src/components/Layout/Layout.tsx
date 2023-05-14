import { FC } from 'react';
import { LayoutType } from '../types';
import style from './Layout.module.scss';

const Layout: FC<LayoutType> = ({children}) => {
  return (
    <div className={style.layout}>
      {children}
    </div>
  );
};

export default Layout;