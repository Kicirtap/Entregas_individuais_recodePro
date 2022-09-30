import { Component } from "react";

const borderStyle = {
    borderRadious: 10
};

class Novidades extends Component {

    render() {

    return(
    <div className="container marketing mt-5 p-3" style={borderStyle}>
        <div className="row desfrute">
           
            <h2 className="titulo_Desfrut">Desfrute dos melhores momentos</h2>
            
            <div className="col-md-4">
            <img  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " width="250"
                height="250" src={require('../assets/pessoafeliz1.jpg')} aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice" focusable="false">
            </img>

            </div>
            <div className="col-md-4">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " width="250"
                height="250" src={require('../assets/pessoas2.jpg')} aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice" focusable="false">
            </img>

            </div>
            <div className="col-md-4">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto " width="250"
                height="250" src={require('../assets/pessoa3.jpg')} aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice" focusable="false">
            </img>

            </div>
        </div>

      <hr className="divisao"/>

      <div className="row featurette">
        <div className="col-md-8">
          <h2 className="titulo_Desfrut">A felicidade a um click</h2>
          <p className="lead">A procura de momentos marcantes com os seus, procurando aventuras,ou em busca de relaxamento.
           Click abaixo e solicite uma cotação.</p>
           <p><a className="btn btn-secondary btn_novidades" href="#">Saiba mais</a></p>
        </div>
        <div className="col-md-4">
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
            height="500" src={require('../assets/pensando.jpg')} aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice" focusable="false">
        </img>

        </div>
      </div>
    </div>
    );
    }
  
}

export default Novidades;