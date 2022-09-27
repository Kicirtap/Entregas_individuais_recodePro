import React from 'react';
import reportWebVitals from './reportWebVitals';
import './styles/estilo.css';
import Home from './components/Home';
import Destino from './pages/Destino';
import Contato from './pages/Contato';
import Ofertas from './pages/Ofertas';
import { ReactDOM } from 'react';
import {BrowserRouter} from'react-router-dom';

ReactDOM.render(

<BrowserRouter>
<Home/>

</BrowserRouter>,

document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
