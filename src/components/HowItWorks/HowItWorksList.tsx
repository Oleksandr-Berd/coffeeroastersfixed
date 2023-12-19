import {works} from '../../db/works'
import HowItWorksItem from './HowItWorksItem';

const HowItWorksList:React.FC = () => {
    return ( <ul>

        {works.map(({id, name, body})=> <HowItWorksItem key={id} id={id} name={name} body={body}/>)}
    </ul> );
}
 
export default HowItWorksList;