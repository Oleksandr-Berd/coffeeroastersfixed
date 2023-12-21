import { NavLink } from "react-router-dom";

type Props = {
path:string,
name:string,
}

const NavItem:React.FC<Props> = ({path, name}) => {


    
    return ( <li>
        <NavLink to={path}>{name}</NavLink>
    </li> );
}
 
export default NavItem;