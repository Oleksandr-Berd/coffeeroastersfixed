import { useMediaQuery } from 'usehooks-ts';

import * as SC from './AboutUsStyled'

import bgMob from '../../assets/img/about/mobile/image-hero-whitecup.jpg'
import bgTab from '../../assets/img/about/tablet/image-hero-whitecup.jpg'
import bgDesk from '../../assets/img/about/desktop/image-hero-whitecup.jpg'

const AboutUs: React.FC = () => {

  const isTablet = useMediaQuery("(min-width:768px)")
const isDesktop = useMediaQuery("(min-width:1440px)")

  return (
    <SC.CommonCon bg={isDesktop? bgDesk : isTablet ? bgTab : bgMob}>
      <SC.Title>About Us</SC.Title>
      <SC.Body>
        Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </SC.Body>
    </SC.CommonCon>
  );
};

export default AboutUs;
