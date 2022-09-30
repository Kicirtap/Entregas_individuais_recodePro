import HeaderApp from "../header/Header";
import Navegacao  from "../header/Navegacao";
import PrincipalPromocoes from "./PrincipalPromocoes";
import Footer from "../footer/Footer";

function PromoLayout() {
    return(
        <>
            <HeaderApp navegacao ={<Navegacao  />} />
            <div className="container text-center mt-5 mb-5">
            <h1>Promoções Relâmpago</h1>
            </div>
            <PrincipalPromocoes />
            <Footer />
        </>
    );
}

export default PromoLayout;