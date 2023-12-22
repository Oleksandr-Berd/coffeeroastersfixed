import * as SC from './HeadquartersStyled'

import { headquarters } from "../../db/headquarters";
import HeadquartersItems from "./HeadquartersItems";

const Headquarters = () => {
    return ( <SC.CommonCon>
        <SC.Title>Our headquarters</SC.Title>
        <ul>
            {headquarters.map(({name, img, id, address, tel})=> <HeadquartersItems key={id} name={name} address={address} tel={tel} img={img}/>)}
        </ul>
    </SC.CommonCon> );
}
 
export default Headquarters;