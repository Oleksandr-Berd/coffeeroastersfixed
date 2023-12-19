import { ReactComponent as LogoMobSvg } from "../../assets/img/shared/mobile/logo_mob.svg";

import * as SC from "./LogoStyled";

const Logo: React.FC = () => {
  return (
    <SC.LogoCon>
      <LogoMobSvg />
      <p>coffeeroaster</p>
    </SC.LogoCon>
  );
};

export default Logo;
