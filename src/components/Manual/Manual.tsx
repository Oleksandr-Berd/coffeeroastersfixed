import { useMediaQuery } from 'usehooks-ts';

import * as SC from './ManualStyled'

import { works } from "../../db/works";
import ManualItem from "./ManualItem";
import Geometry from '../Geometry/Geometry';

const Manual:React.FC = () => {

const isTablet = useMediaQuery("(min-width:768px)")

    return ( <SC.CommonCon>
        {isTablet ? <Geometry page="plan"/> : null}
        <ul>
            {works.map(({id, name, body}) => <ManualItem key={id} id={id} name={name} body={body}/>)}
        </ul>
    </SC.CommonCon> );
}
 
export default Manual;