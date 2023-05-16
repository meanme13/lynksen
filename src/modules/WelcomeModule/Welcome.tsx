import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../UI/Button';
import style from './Welcome.module.scss';

const WelcomeModule: FC = () => {
  const navigate = useNavigate();
  const catClickHandle = (): void => {
    navigate('/cats');
  };

  const dogClickHandle = (): void => {
    navigate('/dogs');
  };

  return (
    <div className={style.container}>
      <p className={style.title}>Please, select a gallery!</p>
      <div className={style.button_group}>
        <Button
          width="80%"
          onClick={catClickHandle}
        >
          Cats
        </Button>
        <Button
          width="80%"
          onClick={dogClickHandle}
        >
          Dogs
        </Button>
      </div>
    </div>
  );
};

export default WelcomeModule;