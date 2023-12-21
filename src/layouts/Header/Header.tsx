import * as SC from "./HeaderStyled"

import Logo from "../../components/Logo/Logo";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import { HeaderType } from "../../utils/types/types";

const Header:React.FC<HeaderType> = ({isMenu, toggleMenu}) => {
    return ( <SC.HeaderStyled>
        <Logo location="header"/>
        <BurgerMenu toggleMenu={toggleMenu} isMenu={isMenu}/>
    </SC.HeaderStyled> );
}
 
export default Header;