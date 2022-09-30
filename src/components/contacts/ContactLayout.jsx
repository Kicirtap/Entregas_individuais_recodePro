import HeaderApp from "../header/Header";
import Navegacao from "../header/Navegacao";
import "../../css/contato.css";
import PrincipalContato from "./PrincipalContato";
import Footer from "../footer/Footer";

 const ContactLayout = () => {
    return(
        <div className="app_contato">
            <div className="contato_app_header">
                <HeaderApp navegacao={<Navegacao />} />
            </div>
            <PrincipalContato />
            <div className="contato_app_footer">
                <Footer  />
            </div>
        </div>
    );
}

export default ContactLayout;