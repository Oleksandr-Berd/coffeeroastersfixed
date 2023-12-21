import * as SC from "./BurgerMenuStyled";

import { ReactComponent as BurgerMobSvg } from "../../assets/img/shared/mobile/icon-hamburger.svg";
import {ReactComponent as CloseMenuSvg} from '../../assets/img/shared/mobile/icon-close.svg'

import { HeaderType } from "../../utils/types/types";

const BurgerMenu: React.FC<HeaderType> = ({isMenu, toggleMenu}) => {
  return (
    <SC.BurgerButton onClick={toggleMenu}>
      {isMenu ? <CloseMenuSvg/> : <BurgerMobSvg/>}
    </SC.BurgerButton>
  );
};

export default BurgerMenu;
