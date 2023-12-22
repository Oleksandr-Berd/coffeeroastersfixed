import * as SC from './PlanHeroStyled'

import bg from '../../assets/img/plan/mobile/image-hero-blackcup.jpg'

const PlanHero: React.FC = () => {
  return (
    <SC.CommonCon bg={bg}>
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
