import { Component } from "react";
import Novidadesinfo from "./Novidadesinfo";
import Novidades from "./Novidades";


class MainHome extends Component{

    render() {
        return(
            <main >
                <div className ="container-fluid">
                    <section className="topo">
                        <img src={require('../assets/capa.webp')} class="img-fluid" />
                    </section>
                    <section className="borda_infe" >
                    <h1 className="titulo_novidades">Novidades</h1>
                    </section>
                </div>
                
                <Novidadesinfo />
                <Novidades />
            </main>
        );
    }
}

export default MainHome;