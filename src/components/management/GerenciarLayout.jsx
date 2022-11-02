import "../../css/destino.css";
import Footer from "../footer/Footer";
import HeaderApp from "../header/Header";
import Navegacao from "../header/Navegacao";
import MainGerencia from "./VerClienteGerencia";





function GerenciarLayout() {

    return(
        <div className="app">
            
            <HeaderApp navegacao ={<Navegacao  />}/>
            

            <MainGerencia/>
   
            <Footer />
        </div>
    )
}

export default GerenciarLayout;