import { useMediaQuery } from 'usehooks-ts';

import * as SC from './PlanHeroStyled'

import bgMob from '../../assets/img/plan/mobile/image-hero-blackcup.jpg'
import bgTab from '../../assets/img/plan/tablet/image-hero-blackcup.jpg'

const PlanHero: React.FC = () => {
  
  const isTablet = useMediaQuery("(min-width:768px)")

    return (
    <SC.CommonCon bg={isTablet ? bgTab : bgMob}>
      <SC.Title>Create a plan</SC.Title>
      <SC.Body>
        Build a subscription plan that best fits your needs. We offer an
        assortment of the best artisan coffees from around the globe delivered
        fresh to your door.
      </SC.Body>
    </SC.CommonCon>
  );
};

export default PlanHero;
