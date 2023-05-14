import { FC } from 'react';
import { Header } from '../../components/Header';
import { Layout } from '../../components/Layout';
import { DogsModule } from '../../modules/DogsModule';

const DogsPage: FC = () => {
  return (
    <Layout>
      <Header />
      <DogsModule />
    </Layout>
  );
};

export default DogsPage;