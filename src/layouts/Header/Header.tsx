import * as SC from "./HeaderStyled";

import Logo from "../../components/Logo/Logo";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import { HeaderType } from "../../utils/types/types";
import { useMediaQuery } from "usehooks-ts";
import NavBar from "../../ui/NavBar/NavBar";

const Header: React.FC<HeaderType> = ({ isMenu, toggleMenu }) => {
  const isTablet = useMediaQuery("(min-width:768px)");

  return (
    <SC.HeaderStyled>
      <Logo location="header" />
      {isTablet ? (
        <NavBar location="footer" />
      ) : (
        <BurgerMenu toggleMenu={toggleMenu} isMenu={isMenu} />
      )}
    </SC.HeaderStyled>
  );
};

export default Header;
