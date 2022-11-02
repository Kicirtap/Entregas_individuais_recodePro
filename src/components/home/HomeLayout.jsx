import "../../css/home.css";

import HeaderApp from "../header/Header";
import MainHome from "./PrincipalHome";
import Navegacao  from "../header/Navegacao";
import Footer from "../footer/Footer";


function HomeLayout() {

 


    return(
        <div className="app">
            
            <HeaderApp navegacao ={<Navegacao  />}/>
            
            <MainHome />
            
            <Footer />
        </div>
    )
}

export default HomeLayout;