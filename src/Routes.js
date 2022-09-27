import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Destino from './pages/Destino';
import Contato from './pages/Contato';
import Ofertas from './pages/Ofertas';

export default function Routes() {
    return (
        <>
        <header>

        </header>
        <main>
            <Switch>
                <Route path='/Home' component={Home}/>
                
            </Switch>
        </main>
        </>
    );
}