import * as SC from './HowItWorksStyled'

import PlanLink from '../../ui/PlanLink/PlanLink';
import HowItWorksList from './HowItWorksList';
import { useMediaQuery } from 'usehooks-ts';
import Geometry from './Geometry';

const HowItWorks:React.FC = () => {
 
 const isTablet = useMediaQuery("(min-width:768px)")
 
 return ( <SC.CommonCon>
        <SC.Title>How it works</SC.Title>
        {isTablet ? <Geometry/> : null}
        <HowItWorksList/>
        <PlanLink/>
    </SC.CommonCon> );
}
 
export default HowItWorks;