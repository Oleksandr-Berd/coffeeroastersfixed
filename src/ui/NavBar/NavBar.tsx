import {navLinks} from '../../db/navLinks'

import NavItem from "./NavItem";

const NavBar:React.FC = () => {
    return ( <nav>
        {navLinks.map(({id, name, path}) => <NavItem key={id} name={name} path={path}/>)}
    </nav> );
}
 
export default NavBar;