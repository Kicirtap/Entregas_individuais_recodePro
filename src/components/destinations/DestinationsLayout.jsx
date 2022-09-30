import "../../css/destino.css";
import Footer from "../footer/Footer";
import HeaderApp from "../header/Header";
import Navegacao from "../header/Navegacao";
import PrincipaisDestinos from "./PrincipaisDestinos";


function DestinationsLayout() {

    return(
        <>
            <HeaderApp navegacao={<Navegacao />} />
            <h2 className="titulo_destinos text-center mt-5 ">Destinos</h2>
            <PrincipaisDestinos />
            <Footer />
        </>
    );
}

export default DestinationsLayout;