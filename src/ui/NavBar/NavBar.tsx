import * as SC from './NavBarStyled'

import {navLinks} from '../../db/navLinks'
import { LayoutType } from '../../utils/types/types';

import NavItem from "./NavItem";

const NavBar:React.FC<LayoutType> = ({location}) => {
    return ( <SC.NavBarStyled location={location}>
        {navLinks.map(({id, name, path}) => <NavItem key={id} name={name} path={path}/>)}
    </SC.NavBarStyled> );
}
 
export default NavBar;