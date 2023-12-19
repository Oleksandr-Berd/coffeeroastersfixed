import * as SC from "./FooterStyled";

import Logo from "../../components/Logo/Logo";
import NavBar from "../../ui/NavBar/NavBar";

const Footer:React.FC = () => {
  return (
    <SC.FooterStyled>
      <Logo />
      <NavBar/>
    </SC.FooterStyled>
  );
};

export default Footer;
