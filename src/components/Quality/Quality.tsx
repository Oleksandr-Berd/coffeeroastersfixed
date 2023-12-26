import { useMediaQuery } from 'usehooks-ts';

import * as SC from './QualityStyled'

import imgQualityMob from '../../assets/img/about/mobile/image-quality.jpg'
import imgQualityTab from '../../assets/img/about/tablet/image-quality.jpg'
import imgQualityDesk from '../../assets/img/about/desktop/image-quality.jpg'


const Quality:React.FC = () => {

const isTablet = useMediaQuery("(min-width:768px)")
const isDesktop = useMediaQuery("(min-width:1440px)")

  return (
    <SC.CommonCon>
      <img src={isDesktop? imgQualityDesk : isTablet ? imgQualityTab : imgQualityMob} alt="quality" />
      <SC.Title>Uncompromising quality</SC.Title>
      <SC.Body>
        Although we work with growers who pay close attention to all stages of
        harvest and processing, we employ, on our end, a rigorous quality
        control program to avoid over-roasting or baking the coffee dry. Every
        bag of coffee is tagged with a roast date and batch number. Our goal is
        to roast consistent, user-friendly coffee, so that brewing is easy and
        enjoyable.
      </SC.Body>
    </SC.CommonCon>
  );
};

export default Quality;
