import Formulario from 'pages/Forms';
import Home from 'pages/Home';
import Dashboard from   'pages/dashboard';
import Contatos from 'pages/Contatos'

import {BrowserRouter, Route, Switch} from 'react-router-dom';
const Routes = () => {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/Formulario" exact>
                    <Formulario/>
                </Route>
                <Route path="/dashboard" exact>
                    <Dashboard/>
                </Route>
                <Route path="/contatos" exact>
                    <Contatos/>
                </Route>
                
            </switch>
        </BrowserRouter>
    );
}

export default Routes;