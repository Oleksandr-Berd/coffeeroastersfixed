import * as SC from './HowItWorksStyled'

import PlanLink from '../../ui/PlanLink/PlanLink';
import HowItWorksList from './HowItWorksList';

const HowItWorks:React.FC = () => {
    return ( <SC.CommonCon>
        <SC.Title>How it works</SC.Title>
        <HowItWorksList/>
        <PlanLink/>
    </SC.CommonCon> );
}
 
export default HowItWorks;