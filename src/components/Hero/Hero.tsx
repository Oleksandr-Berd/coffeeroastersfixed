
import * as SC from "./HeroStyled";

import heroBgMob from "../../assets/img/home/mobile/image-hero-coffeepress.jpg";
import PlanLink from "../../ui/PlanLink/PlanLink";

const Hero: React.FC = () => {
  return (
    <SC.HeroCon bg={heroBgMob}>
      <SC.Title>Great coffee made simple.</SC.Title>
      <SC.Body>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </SC.Body>
      <PlanLink/>
    </SC.HeroCon>
  );
};

export default Hero;
