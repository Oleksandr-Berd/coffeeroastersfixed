import { useMediaQuery } from "usehooks-ts";

import * as SC from "./HeroStyled";

import heroBgMob from "../../assets/img/home/mobile/image-hero-coffeepress.jpg";
import heroBgTab from '../../assets/img/home/tablet/image-hero-coffeepress.jpg'
import heroBgDesk from '../../assets/img/home/desktop/image-hero-coffeepress.jpg'
import PlanLink from "../../ui/PlanLink/PlanLink";

const Hero: React.FC = () => {

const isTablet = useMediaQuery("(min-width:768px)")
const isDesktop = useMediaQuery("(min-width:1440px)")

  return (
    <SC.HeroCon bg={isDesktop ? heroBgDesk : isTablet ? heroBgTab : heroBgMob}>
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
