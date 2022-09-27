import React from "react";

const Oferta = () => {

    return(

        <section className='cardsPromo'>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div class="col"> <img src={require('../../assets/capa.webp')} class="img-thumbnail" /></div>
            <div class="col"> <img src={require('../../assets/capa.webp')} class="img-thumbnail" /></div>
            <div class="col"> <img src={require('../../assets/capa.webp')} class="img-thumbnail" /></div>
            <div class="col"> <img src={require('../../assets/capa.webp')} class="img-thumbnail" /></div>
        </div>

       </section>
    );
};


export default Oferta;