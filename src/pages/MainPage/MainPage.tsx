import { FC } from 'react';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';
import { WelcomeModule } from '../../modules/WelcomeModule';

const MainPage: FC = () => {
  return (
    <Layout>
      <Header />
      <WelcomeModule />
    </Layout>
  );
};

export default MainPage;