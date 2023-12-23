import { Suspense, useState } from "react";
import { DNA } from "react-loader-spinner";


import * as SC from "./SharedLayoutStyled"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavMenu from "../../components/NavMenu/NavMenu";
import ModalSummary from "../../components/ModalSummary/ModalSummary";

type Props = {
    children:React.ReactNode,
    isModalSummary:boolean;
    toggleModalSummary:()=>void;
}

const SharedLayout:React.FC<Props> = ({children, isModalSummary , toggleModalSummary}) => {
const [isMenu, setIsMenu] = useState(false)

const toggleMenu = ():void =>{
    setIsMenu(!isMenu)
}

    return ( <SC.SharedLayoutStyled isMenu={isMenu || isModalSummary ? "true" : "false"}>
        <Suspense fallback={<DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />}>
            <Header isMenu={isMenu} toggleMenu={toggleMenu}/>
        {isMenu ? <NavMenu toggleMenu={toggleMenu}/> : null}
        {isModalSummary ? <ModalSummary toggleModalSummary={toggleModalSummary}/> : null}

        {children}
        <Footer/>
        </Suspense>
    </SC.SharedLayoutStyled> );
}
 
export default SharedLayout;