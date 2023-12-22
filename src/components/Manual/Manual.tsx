import * as SC from './ManualStyled'

import { works } from "../../db/works";
import ManualItem from "./ManualItem";

const Manual:React.FC = () => {
    return ( <SC.CommonCon>
        <ul>
            {works.map(({id, name, body}) => <ManualItem key={id} id={id} name={name} body={body}/>)}
        </ul>
    </SC.CommonCon> );
}
 
export default Manual;