import React from 'react';
import Rodape from '../../components/Rodape';
import Navegacao from '../../components/Navegacao';


const Contato  = () => {

    return (

        <div className="container-fluid">

            <Navegacao />

            <div class="container fundoImagem" id="contatoHeader">
                <section className='tituloContato'>
                    <br/>
                    <h2 >Entre em Contato</h2>
                    <span>Estamos a disposição para melhor atende-lo !</span>
                </section>
                <section className='formContato'>
                    <div class="row">
                        <div class="col-sm-3">

                        </div>
                        <div class="col-sm-6  p-5" >
                            <form class="row g-3">
                                <div class="col-12">
                                    <label for="inputName" class="form-label">Nome</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Nome completo" />
                                </div>
                                <div class="col-12">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Digite seu email" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputPhone" class="form-label">Telefone</label>
                                    <input type="text" class="form-control" id="inputPhone" placeholder="+55 (xx) xxxx-xxxx" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">Cidade</label>
                                    <input type="text" class="form-control" id="inputCity" />
                                </div>
                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">Estado</label>
                                    <input type="text" class="form-control" id="inputCity" />
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                                        <label class="form-check-label" for="gridCheck">
                                            Desejo receber informações
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Sign in</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-3">

                        </div>
                    </div>
                </section>
            </div>
            <footer>
                <Rodape />
            </footer>
        </div>

    );
};

export default Contato;


