import * as SC from "./HeaderStyled"

import Logo from "../../components/Logo/Logo";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

const Header:React.FC = () => {
    return ( <SC.HeaderStyled>
        <Logo/>
        <BurgerMenu/>
    </SC.HeaderStyled> );
}
 
export default Header;