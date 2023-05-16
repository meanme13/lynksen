import { FC } from 'react';
import { LayoutType } from '../types';
import style from './Layout.module.scss';
import { Header } from '../Header';

const Layout: FC<LayoutType> = ({children}) => {
  return (
    <div className={style.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;