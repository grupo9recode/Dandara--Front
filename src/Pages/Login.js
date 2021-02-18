import Menu from "../Componentes/Menu/Menu"
import './Css/Login.css'
import React from 'react'
import RodapeGeral from "../Componentes/Rodape/RodapeGeral";
import {TiFlowChildren} from 'react-icons/ti';

const Login = () => {
    

    // puxar o bd e tentar validar
    const [action, setAction] = React.useState([]);
    
    React.useEffect(async()=>{

        const url = await fetch('http://localhost:3005/login');    
        const urlResponse = await url.json();
        
        console.log(JSON.stringify(urlResponse));
        setAction(urlResponse);
        

    }, []);
    
    console.log(action[0])
    let validacao = action.filter(item => item.email == document.getElementById("email").value)
        console.log(validacao)
    
    const validar=()=> {
        // document.getElementById("email").value !== '' && document.getElementById("senha").value !== '' 
        
        let validacao = action.filter(item => item.email === document.getElementById("email").value)
        console.log(validacao[0])
        if (document.getElementById("email").value !== '' && document.getElementById("senha").value !== '') {
            alert('Login efetuado!')
            localStorage.setItem('key', true);
            
        } else {
            // condição para verificar e colocar no localstorage
            alert("Acesso negado")  
        };   
    }
    if (localStorage.getItem('key')) {
        window.location='/minhaconta'
    }
    return (
        <>
            <Menu/>
            
            <div className="container container-fluid  d-flex mt-6 mb-6  menu">
            <a href='/'><img src={require('../Imagens/imponente.png').default} alt="" width="300" className='imagem-contato mr-auto'/></a>
                <div className="p-3 border mt-3 menu bg-white mb-3 ml-auto mr-auto ">
                    <div className="form-icon">
                        <span><TiFlowChildren/></span>
                    </div>
                <form action='' method='get' >
                    <div className="mb-3">
                        <label for="email" className="form-label text-dark font-weight-bold">Email</label>
                        <input type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label for="senha" className="form-label text-dark font-weight-bold">Senha</label>
                        <input type="password" className="form-control" id="senha" name="senha" />
                    </div>
                    <div className="mb-3 d-flex">
                        <div>
                            <a href="/esqueciminhasenha" className="nav-link text-dark btn font-weight-bold">Esqueci minha senha</a>
                            <a href="/cadastrese" className="nav-link text-dark btn font-weight-bold">Cadastre-se</a>
                        </div>
                        <div className="ml-auto mt-4">
                                <button type="submit" onClick={validar} className="btn botao text-white font-weight-bold">ENTRAR</button>
                        </div>   
                    </div>
                    </form>
                    
                </div>
            </div>
            <RodapeGeral/>
        </>
    )
}
export default Login;