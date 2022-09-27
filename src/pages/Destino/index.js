import React from 'react';
import Rodape from '../../components/Rodape';
import Navegacao from '../../components/Navegacao';
import Destinos from '../../components/Destinos';

const Destino = () => {

    return (

        <div className="container-fluid">

            <Navegacao />
            
            <h4 className="tituloPacotes">OS MELHORES DESTINOS PARA VOCÊ E SUA FAMÍLIA</h4>  
                <Destinos/>
                <Destinos/>
                <Destinos/>
                <Destinos/>

            <footer>
                <Rodape />
            </footer>
        </div>

    );
};

export default Destino;