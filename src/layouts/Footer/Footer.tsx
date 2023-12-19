import * as SC from "./FooterStyled";

import Logo from "../../components/Logo/Logo";
import NavBar from "../../ui/NavBar/NavBar";
import SocNet from "../../ui/SocNet/SocNet";

const Footer:React.FC = () => {
  return (
    <SC.FooterStyled>
      <Logo location="footer"/>
      <NavBar location="footer"/>
      <SocNet/>
    </SC.FooterStyled>
  );
};

export default Footer;
