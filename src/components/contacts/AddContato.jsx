import React, { useState } from "react";
import axios from 'axios';

export default function AddContato() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const salvar = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/clientes", {
            nome: nome,
            email: email,
            telefone: telefone
        }).then((result) => {
            alert("Solicitação enviada com sucesso")
        })
    }

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center mb-5">Entre em contato conosco</h2>
            <section>
                <form method="get">
                    <div id="container_form" className="mb-4">
                        <div className="mb-2">
                            <label htmlFor="nameInput" className="form-label">Nome:</label>
                            <input type="text" className="form-control" id="nameInput" value={nome}
                                onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="emailInput" className="form-label">Endereço de e-mail:</label>
                            <input type="email" className="form-control" id="emailInput" placeholder="nome@exemplo.com"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefoneInput" className="form-label">Telefone:</label>
                            <input type="text" className="form-control" id="telefoneInput" placeholder="+55 (xx) xxxxx- xxxx"
                            value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn_novidades" style={{ color: "white" }} onClick={salvar}>Enviar </button>
                </form>
            </section>
            <section className="imag mt-5">
                <img src={require('../assets/capa.webp')} class="img-fluid" />
            </section>
        </div>
    );
}