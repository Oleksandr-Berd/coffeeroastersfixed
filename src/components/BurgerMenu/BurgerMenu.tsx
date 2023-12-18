import * as SC from "./BurgerMenuStyled";

import { ReactComponent as BurgerMobSvg } from "../../assets/img/shared/mobile/icon-hamburger.svg";

const BurgerMenu: React.FC = () => {
  return (
    <SC.BurgerButton>
      <BurgerMobSvg />
    </SC.BurgerButton>
  );
};

export default BurgerMenu;
