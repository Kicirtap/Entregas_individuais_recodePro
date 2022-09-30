import { Component } from "react";

const borderStyle = {
  borderRadious: 10
};

class Novidadesinfo extends Component {
    render() {
        return(
          
          <div className="container mt-5 p-3 fundo_novidades" >
           
            <div className="row">
              <div className="col-lg-6 mb-3">
              <img src={require('../assets/porto-de-galinhas.jpg')}  className="bd-placeholder-img " width="250" height="200"
                    aria-label="Placeholder: 140x140" 
                  preserveAspectRatio="xMidYMid slice" focusable="false">
                </img>
      
                <h2 className="fw-normal">Porto de galinhas</h2>
                <p> Os Passeios Mais Incríveis em  Porto Você Encontra Aqui</p>
                <p><a className="btn btn-secondary btn_novidades" href="#">Saiba mais</a></p>
              </div>
              <div className="col-lg-6 flex-grow-1 mb-3">
                <img src={require('../assets/rio de janeiro.webp')}  className="bd-placeholder-img " width="250" height="200"
                    aria-label="Placeholder: 140x140" 
                  preserveAspectRatio="xMidYMid slice" focusable="false">
                </img>
      
                <h2 className="fw-normal">Rio de Janeiro </h2>
                <p>Venha conhecer a cidade maravilhosa !</p>
                <p><a className="btn btn-secondary btn_novidades" >Saiba mais</a></p>
              </div>
              
            </div>
            <hr className="divisao"/>
          </div>
        );
    }
}

export default Novidadesinfo;