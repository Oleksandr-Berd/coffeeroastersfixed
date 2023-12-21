import * as SC from './NavMenuStyled'

import NavBar from "../../ui/NavBar/NavBar";

const NavMenu:React.FC = () => {
    return ( <SC.Overlay>
        <SC.ModalMenu>
            <NavBar location="header"/>
        </SC.ModalMenu>
    </SC.Overlay> );
}
 
export default NavMenu;