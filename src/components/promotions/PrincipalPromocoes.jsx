import { Component } from "react";
import "../../css/promocoes.css";
import PromotionsList from "./PromoLista";


class PrincipalPromocoes extends Component {
    render() {
        return(
           <main>
                <PromotionsList />
           </main>
        );
    }
}

export default PrincipalPromocoes;