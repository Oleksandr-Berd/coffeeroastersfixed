import { ReactComponent as LogoMobSvg } from "../../assets/img/shared/mobile/logo_mob.svg";
import { LayoutType } from "../../utils/types/types";

import * as SC from "./LogoStyled";



const Logo: React.FC<LayoutType> = ({location}) => {
  return (
    <SC.LogoCon location={location}>
      <LogoMobSvg width={location === "footer" ? "22.15px" : "16.58px"} height={location === "footer" ? "22.15px" : "16.62px"}/>
      <p>coffeeroaster</p>
    </SC.LogoCon>
  );
};

export default Logo;
