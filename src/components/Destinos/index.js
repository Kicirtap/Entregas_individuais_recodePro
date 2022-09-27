import React from "react";

const Destinos = () => {

    return(
        
         <div className="container">
            
             <section className='cardsDestino'>
                
                <div class="row ">
                    <div class="col-sm-4 pt-2">
                        <div class="col">
                            <div class="card h-100 text-center">
                                <img src={require('../../assets/capa.webp')} class="img-fluid" />
                                <div class="card-body">
                                    <h5 class="card-title">Maldivas</h5>

                                </div>
                                <div class="card-footer">
                                    <a href="destino.html" class="btn btn-primary">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 pt-2">
                        <div class="col">
                            <div class="card h-100 text-center">
                                <img src={require('../../assets/capa.webp')} class="img-fluid" />
                                <div class="card-body">
                                    <h5 class="card-title">Paris</h5>

                                </div>
                                <div class="card-footer">
                                    <a href="destino.html" class="btn btn-primary">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 pt-2">
                        <div class="col">
                            <div class="card h-100 text-center">
                                <img src={require('../../assets/capa.webp')} class="img-fluid" />
                                <div class="card-body">
                                    <h5 class="card-title">Egito</h5>

                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         </div>
    );
};


export default Destinos;