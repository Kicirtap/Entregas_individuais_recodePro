import { Component } from "react";
import "../../css/destinos.css";

class Destinations extends Component {

    render() {
        return (
            <section className="destinos">

                <div className="container">

                    <section className='cardsDestino'>

                        <div class="row ">
                            <div class="col-sm-4 pt-2">
                                <div class="col">
                                    <div class="card h-100 text-center card_scale">
                                        <img src={require('../assets/capa.webp')} class="img-fluid" />
                                        <div class="card-body">
                                            <h5 class="card-title">Maldivas</h5>

                                        </div>
                                        <div class="card-footer">
                                            <a href="destino.html" class="btn btn_novidades">Saiba mais</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 pt-2">
                                <div class="col">
                                    <div class="card h-100 text-center card_scale">
                                        <img src={require('../assets/capa.webp')} class="img-fluid" />
                                        <div class="card-body">
                                            <h5 class="card-title">Paris</h5>

                                        </div>
                                        <div class="card-footer">
                                            <a href="destino.html" class="btn btn_novidades">Saiba mais</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 pt-2">
                                <div class="col">
                                    <div class="card h-100 text-center card_scale">
                                        <img src={require('../assets/capa.webp')} class="img-fluid" />
                                        <div class="card-body">
                                            <h5 class="card-title">Egito</h5>

                                        </div>
                                        <div class="card-footer">
                                            <a href="#" class="btn btn_novidades">Saiba mais</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        );
    }
}

export default Destinations;