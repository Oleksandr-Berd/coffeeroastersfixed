import Manual from "../../components/Manual/Manual";
import Order from "../../components/Order/Order";
import PlanHero from "../../components/PlanHero/PlanHero";

const PlanPage:React.FC = () => {
    return ( <div>
        <PlanHero/>
        <Manual/>
        <Order/>
    </div> );
}
 
export default PlanPage;