import * as SC from './NavBarStyled'

import {navLinks} from '../../db/navLinks'
import { LayoutType } from '../../utils/types/types';

import NavItem from "./NavItem";

const NavBar:React.FC<LayoutType> = ({location}) => {


    return ( <SC.NavBarStyled location={location}>
        {navLinks.map(({id, name, path}) => {

const capitalized = (str:string) => str.charAt(0).toUpperCase() + str.slice(1)

const modifiedName = name.split(" ").map(el => capitalized(el)).join(" ")



        return <NavItem key={id} name={location === "footer" ? name : modifiedName} path={path}/>}
        )}
    </SC.NavBarStyled> );
}
 
export default NavBar;