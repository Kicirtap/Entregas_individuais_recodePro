import React from 'react';
import Navegacao from '../../components/Navegacao';
import Rodape from '../../components/Rodape';
import Oferta from '../../components/Oferta';

const Ofertas = () => {

    return (

        <div className="container-fluid">

            <Navegacao />


            <div class="container">
                <Oferta />
                <Oferta />
                <Oferta />
            </div>


            <footer>
                <Rodape />
            </footer>

        </div>


    );
};

export default Ofertas;