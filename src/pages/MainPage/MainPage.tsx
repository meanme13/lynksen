import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { WelcomeModule } from '../../modules/WelcomeModule';

const MainPage: FC = () => {
  return (
    <Layout>
      <WelcomeModule />
    </Layout>
  );
};

export default MainPage;