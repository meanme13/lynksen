import { FC } from 'react';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { CatsModule } from '../../modules/CatsModule';

const CatsPage: FC = () => {
  return (
    <Layout>
      <Header />
      <CatsModule />
    </Layout>
  );
};

export default CatsPage;