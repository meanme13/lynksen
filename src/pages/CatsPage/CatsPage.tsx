import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { CatsModule } from '../../modules/CatsModule';

const CatsPage: FC = () => {
  return (
    <Layout>
      <CatsModule />
    </Layout>
  );
};

export default CatsPage;