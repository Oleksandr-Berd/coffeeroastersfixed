import AboutUs from "../../components/AboutUs/AboutUs";
import Commitment from "../../components/Commitment/Commitment";
import Headquarters from "../../components/HeadQuarters/Headquarters";
import Quality from "../../components/Quality/Quality";

const AboutUsPage:React.FC = () => {
    return ( <div>
        <AboutUs/>
        <Commitment/>
        <Quality/>
        <Headquarters/>
    </div> );
}
 
export default AboutUsPage;