import React from 'react';

const Rodape = () => {

     return(
      <div>
        <section className='rodape'>
                    
        <div className="row">
            <div className="col-sm-6">
                <h5>HM Viagens</h5>
                <p>Copyright © 2022 All rights reserved
                    Powered by Ptk</p>

            </div>
            <div className="col-sm-6" >
                <h5 class="tituloRodape" >Menu</h5>

                <ul class="itensRodape" >
                    <li><a href="index.html" >Home</a></li>
                    <li><a href="destino.html" >Destino</a></li>
                    <li><a href="promocoes.html" >Promoções</a></li>
                </ul>

            </div>
        </div>

    </section>
    <section className='reservados'>
        <p className="direitos">© Copyright 2022 - Todos os direitos reservados</p>
    </section>
    </div>
     );
}

export default Rodape;