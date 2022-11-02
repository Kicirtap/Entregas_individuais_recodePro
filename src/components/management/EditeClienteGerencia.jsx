import React, { useState } from "react";
import {useNavate, Link, useParams} from "react-router-dom";
import axios from 'axios';

export default function EditeClienteGerencia() {

    const {id} = useParams();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const editar = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8080/clientes/${id}`, {
            nome: nome,
            email: email,
            telefone: telefone
        }).then((result) => {
            alert("Cliente Atualizado")
            
        })
    };

    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center mb-5">Editar Cliente</h2>
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
                    <button type="submit" className="btn btn_novidades" style={{ color: "white" }} onClick={editar}>Editar </button>
                </form>
            </section>
           
        </div>
    );
}