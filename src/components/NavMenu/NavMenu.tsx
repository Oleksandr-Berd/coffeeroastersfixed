import * as SC from './NavMenuStyled'

import NavBar from "../../ui/NavBar/NavBar";
import { HeaderType } from '../../utils/types/types';




const NavMenu:React.FC<Partial <HeaderType>> = ({toggleMenu}) => {
    return ( <SC.Overlay onClick={toggleMenu}>
        <SC.ModalMenu>
            <NavBar location="header"/>
        </SC.ModalMenu>
    </SC.Overlay> );
}
 
export default NavMenu;