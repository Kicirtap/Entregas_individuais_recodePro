import { Link } from 'react-router-dom';

const { Component } = require('react');


class Navegacao extends Component {
    render() {
        return(
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    
                    <li><Link to="/" className="nav-link px-2 text-black">Home</Link></li>
                    <li><Link to="/destinations" className="nav-link px-2 text-black">Destino</Link></li>
                    <li><Link to="/promotions" className="nav-link px-2 text-black">Promoções</Link></li>
                    <li><Link to="/contacts" className="nav-link px-2 text-black">Contato</Link></li>
                    <li><Link to="/management" className="nav-link px-2 text-black">Gerência</Link></li>
                    
                </ul>
            
       );
    }
}

export default Navegacao;