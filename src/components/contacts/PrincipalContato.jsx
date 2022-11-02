import { Component } from "react";
import AddContato from "./AddContato";




class PrincipalContato extends Component {
    render() {
        return(
            <main className="contato_app_main">
                <AddContato />
            </main>
        );
    }
}

export default PrincipalContato;