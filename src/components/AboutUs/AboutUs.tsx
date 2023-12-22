import * as SC from './AboutUsStyled'

import bg from '../../assets/img/about/mobile/image-hero-whitecup.jpg'

const AboutUs: React.FC = () => {
  return (
    <SC.CommonCon bg={bg}>
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
