import React from 'react';
//import { BrowserRouter, Switch, Route, Redirec} from 'react-router-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Todolist from './components/Todolist';
import Header from './components/Header';
//import Resultado from './pages/Resultado';
import Erro from './pages/Erro';
import Pagination from './pages/Pagination';




const Routes = () => {

    return (
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Todolist" component={Todolist} />
                <Route path="/Pagination" component={Pagination} />
                <Route path="*" component={Erro} />
            </Switch>
        </BrowserRouter>

    );

}

export default Routes;             

//<Route path="/Resultado" component={Resultado} />