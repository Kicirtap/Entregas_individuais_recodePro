import React, {useState, useEffect } from "react";
import axios from 'axios';



export default function MainGerencia() {

    const [clientes, setClientes] = useState([]);

    const listarClientes = async () => {
        try {
            await axios.get("http://localhost:8080/clientes")
                .then((response) => {
                    setClientes(response.data)
                })
        } catch (erro) {
            alert(erro.message);
        }
    };

    useEffect(() => {
        listarClientes();
    }, [])
    return (
        <main >
            <div className="container-fluid mt-5">
                <section>
                    <table class="table table-striped border shadow">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefone</th>
                                <th scope="col"> - </th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientes.map((clientes, key) => (
                                <tr className="py-5">
                                    <th scope="row" key={key}>{key + 1}</th>
                                    <td>{clientes.nome}</td>
                                    <td>{clientes.email}</td>
                                    <td>{clientes.telefone}</td>
                                    <td>
                                    <button className="btn btn-outline-success mx-2">
                                        Ver
                                    </button>
                                    </td>
                                    <td>
                                    <button className="btn btn-outline-primary mx-2">
                                        Editar
                                    </button>

                                    </td>
                                    <td>
                                    <button className="btn btn-outline-danger mx-2">
                                        Excluir
                                    </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </section>


            </div>


        </main>
    );
}

