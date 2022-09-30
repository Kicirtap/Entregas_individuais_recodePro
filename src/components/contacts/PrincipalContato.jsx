import { Component } from "react";
import ContactsForm from "./ContatoPreencher";



class PrincipalContato extends Component {
    render() {
        return(
            <main className="contato_app_main">
                <ContactsForm />
            </main>
        );
    }
}

export default PrincipalContato;