import React from 'react';
import Rodape from './Rodape';
import Navegacao from './Navegacao';

const Inicio = () => {

    return (

        <div className="container-fluid">

              <Navegacao/>
            <section className='topoInfo'>

                <img src={require('../..assets/capa.webp')} class="img-fluid" />

            </section>

            <section className='meioInfo'>

                <div className="row">
                    <div className="col-sm-4">
                        <div className="col">
                            <div className="card h-100 text-center">
                                <img src={require('../..assets/porto.jpg')} class="img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">Porto Seguro</h5>
                                </div>
                                <div className="card-footer">
                                    <a href="destino.html" className="btn btn-primary">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="col">
                            <div className="card h-100 text-center">
                                <img src={require('../..assets/porto.jpg')} class="img-fluid" />

                                <div className="card-body">
                                    <h5 className="card-title">Rio de Janeiro</h5>
                                </div>
                                <div className="card-footer">
                                    <a href="destino.html" className="btn btn-primary">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="col">
                            <div className="card h-100 text-center">
                                <img src={require('../..assets/gramado.jpg')} class="img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">Gramado</h5>

                                </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Saiba mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className='cotacao'>
                <div className="row">
                    <div className="row " >
                        <div className="col-sm-6 pt-2 pb-2">
                            <h5 className='sliderText' >Momentos</h5>
                            <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <img src={require('..assets/momentos.webp')} class="img-fluid" />
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={require('/..assets/negocios.jpg')} class="img-fluid" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require('../..assets/momentos.webp')} class="img-fluid" />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div className="col-sm-6 p-2">
                            <h5 className='sliderText' >Solicite uma Cotação!</h5>


                            <form>

                                <div className="row mb-3">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email" className="form-control" id="inputEmail3" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputName3" className="col-sm-2 col-form-label">Nome</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputName3" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <label for="inputName3" className="col-sm-2 col-form-label">Telefone</label>
                                    <div className="col-sm-10">
                                        <input type="password" className="form-control" id="inputTelefone3" />
                                    </div>
                                </div>


                                <div className="row mb-3">

                                    <div className="col-sm-10 offset-sm-2">
                                        <button type="submit" class="btn btn-primary">Solicitar</button>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                            <label className="form-check-label" for="gridCheck1">
                                                Concordo em receber promoções.
                                            </label>



                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            </section>


            <footer>
                     <Rodape/>
            </footer>

        </div>


    );
};

export default Inicio;