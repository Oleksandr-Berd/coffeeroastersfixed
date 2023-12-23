import { NavLink, useNavigate } from "react-router-dom";

import * as SC from './ModalSummaryStyled'

type Props ={
    toggleModalSummary:()=> void;
}

const ModalSummary:React.FC<Props> = ({toggleModalSummary}) => {

    const navigate = useNavigate()

const handleCheckout = () => {
    toggleModalSummary()
navigate("/")
}

    return ( 
        <SC.SummaryOverlay>
            <SC.OrderSummaryCon>
                <div>
                    <h2>Order Summary</h2>
                </div>
                <div>
                    <p></p>
                    <p></p>
                    <button onClick={handleCheckout}>Checkout - </button>
                </div>
            </SC.OrderSummaryCon>
        </SC.SummaryOverlay>
     );
}
 
export default ModalSummary