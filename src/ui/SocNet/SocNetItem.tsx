import { NavLink } from "react-router-dom";

type Props ={
    icon:string;
    path:string;
}

const SocNetItem:React.FC<Props> = ({icon, path}) => {
    
    return ( <li>
        <NavLink to={path}>
            <img src={icon} alt="icon" />
        </NavLink>
    </li> );
}
 
export default SocNetItem;