import { FC } from 'react';
import style from './ImageSlider.module.scss';
import SampleImageSlider from 'react-simple-image-slider';
import { CardImage } from '../../UI/Skeletons/CardImage';
import { ImageSliderType } from '../../modules/CatsModule/types';

const ImageSlider: FC<ImageSliderType> = ({items}) => {
  return (
    <div className={style.sliderBlock}>
      {items ? (
        <SampleImageSlider
          width={'inherit'}
          height={'inherit'}
          images={items.map((item) => item.url)}
          showNavs={true}
          showBullets={false}
          loop={true}
          autoPlay={true}
        />
      ) : (
        <CardImage />
      )}
    </div>
  );
};

export default ImageSlider;