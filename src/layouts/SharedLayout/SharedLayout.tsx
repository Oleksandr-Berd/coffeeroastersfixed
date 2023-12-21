import { Suspense, useState } from "react";
import { DNA } from "react-loader-spinner";


import * as SC from "./SharedLayoutStyled"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavMenu from "../../components/NavMenu/NavMenu";

type Props = {
    children:React.ReactNode
}

const SharedLayout:React.FC<Props> = ({children}) => {
const [isMenu, setIsMenu] = useState(false)

const toggleMenu = ():void =>{
    setIsMenu(!isMenu)
}

    return ( <SC.SharedLayoutStyled isMenu={isMenu ? "true" : "false"}>
        <Suspense fallback={<DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />}>
            <Header isMenu={isMenu} toggleMenu={toggleMenu}/>
        {isMenu ? <NavMenu/> : null}

        {children}
        <Footer/>
        </Suspense>
    </SC.SharedLayoutStyled> );
}
 
export default SharedLayout;