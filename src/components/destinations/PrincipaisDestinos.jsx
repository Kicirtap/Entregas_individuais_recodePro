import { Component } from "react";
import "../../css/responsivo.css";
import Destinations from "./Destinations";

class MainDestinations extends Component {
    render() {
        return(
            <main className="conteudo">
                
                <Destinations />
                <Destinations />
                <Destinations />
                <Destinations />
            </main>
        );
    }
}

export default MainDestinations;