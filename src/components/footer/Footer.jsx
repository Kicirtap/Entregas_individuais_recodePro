import { Component } from "react";


class Footer extends Component {
    render() {
        return(
            <footer className="container-fluid estilo_footer">
                <hr className="divisao"/>
                <p className="text_footer text-white">Todos os direitos reservados.</p>
                <p className="text_footer text-white">&copy; 2022 HM Viagens Company, Inc.</p>
            </footer>
        )
    }
}

export default Footer;