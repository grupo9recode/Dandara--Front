
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Pages/Css/App.css';
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Login from './Pages/Login';
import Servicos from './Pages/Servicos';
import Cadastrese from './Pages/Cadastrese';
import Produtos from './Pages/Produtos';
import NotFound from './Pages/NotFound';
import EditarDados from './Pages/EditarDados';
import CadastrarProdutos from './Pages/CadastrarProdutos';
import CadastrarServicos from './Pages/CadastrarServicos';
import { RecuperarSenha } from './Pages/RecuperarSenha';
import MinhaConta from './Pages/MinhaConta';
<<<<<<< HEAD
import PrivateRoute from './PrivateRoute'
import EditarProdutos from './Pages/EditarProdutos';
=======
//import PrivateRoute from './PrivateRoute'
>>>>>>> 2454bc38d3c57b91582ae9bdd2dc32326d00dd29

const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route exact path="/" component={Home} />
               <Route exact path="/contato" component={Contato} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/servicos" component={Servicos} />
                <Route exact path="/cadastrese" component={Cadastrese} />
                <Route exact path="/produtos" component={Produtos} />
                <Route exact path="/esqueciminhasenha" component={RecuperarSenha} />
<<<<<<< HEAD
                <PrivateRoute exact path="/editardados" component={EditarDados} />
                <PrivateRoute exact path="/cadastrarprodutos" component={CadastrarProdutos} />
                <Route exact path="/editarprodutos/:id" component={EditarProdutos} />
                <PrivateRoute exact path="/cadastrarservicos" component={CadastrarServicos} />
=======
                <Route exact path="/editardados" component={EditarDados} />
                <Route exact path="/cadastrarprodutos" component={CadastrarProdutos} />
                <Route exact path="/cadastrarservicos" component={CadastrarServicos} />
>>>>>>> 2454bc38d3c57b91582ae9bdd2dc32326d00dd29
                <Route exact path="/recuperarsenha" component={RecuperarSenha} />
                <Route exact path="/minhaconta" component={MinhaConta}/>
                <Route  component={NotFound} />

            </Switch>
        </BrowserRouter>
    );
}
export default Rotas;