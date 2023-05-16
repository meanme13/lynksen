import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { DogsModule } from '../../modules/DogsModule';

const DogsPage: FC = () => {
  return (
    <Layout>
      <DogsModule />
    </Layout>
  );
};

export default DogsPage;