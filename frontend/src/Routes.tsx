import Formulario from 'pages/Forms';
import Home from 'pages/Home';


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
               
            </switch>
        </BrowserRouter>
    );
}

export default Routes;