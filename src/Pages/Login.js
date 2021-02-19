import Menu from "../Componentes/Menu/Menu"
import './Css/Login.css'
import React from 'react'
import RodapeGeral from "../Componentes/Rodape/RodapeGeral";
import {RiContactsBookUploadLine} from 'react-icons/ri'
import { FiInstagram, FiFacebook,AiOutlineWhatsApp } from 'react-icons/fi';


const Login = () => {
    

    // puxar o bd e tentar validar
    const [action, setAction] = React.useState([]);
    
    React.useEffect(async()=>{

        const url = await fetch('http://localhost:3050/usuarios/login');    
        const urlResponse = await url.json();
        
        console.log(JSON.stringify(urlResponse));
        setAction(urlResponse);
        

    }, []);
    
    /*console.log(action[0])
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
    }*/
    return (
        <>
            <Menu/>
            
            
        <div> 
           <div className="container container-fluid  d-flex mt-6 mb-6 contato">
            <a href='/'><img src={require('../Imagens/onceicao.png').default} alt="" width="300" className='imagem-contato mr-5'/></a>
                  
<div><div className="ContatoBackground">
     <div className="ContatoContainer">
       <div className="ContatoScreen">
         <div className="Contato-Screen-header">
           <div className="Contato-Screen-header-left">
             <div className="Contato-Screen-header-button close"></div>
             <div className="Contato-Screen-header-button maximize"></div>
             <div className="Contato-Screen-header-button minimize"></div>
           </div>
           <div className="Contato-Screen-header-right">
             <div className="Contato-Screen-header-ellipsis"></div>
             <div className="Contato-Screen-header-ellipsis"></div>
             <div className="Contato-Screen-header-ellipsis"></div>
           </div>
         </div>
         <div className="Contato-screen-body">
           <div className="Contato-screen-body-item left">
             <div className="Contato-app-title">
               <span>Faça o</span>
               <span>Login!</span>
             </div>
             <div id="alternativeLogin">
                   <div id="iconGroup">
                    <a href='https://www.facebook.com/'><FiFacebook className="icon" /> </a><br/>
                    <a href='https://www.instagram.com/'><FiInstagram className='icon'/> </a><br/>
                    {/*<a href='https://web.whatsapp.com/'><AiOutlineWhatsApp className='icon'/> </a><br/>*/}
                </div>
                <div className="Contato-app-contact">Desenvolvido graças ao RecodePro (2020)</div>
                <a href="./RecuperarSenha" className="nav-link text-dark btn font-weight-bold">Esqueci minha senha</a>
                            <a href="/Cadastrese" className="nav-link text-dark btn font-weight-bold">Cadastre-se</a>
                </div>
           </div>

   

           <form action="http://localhost:3050/usuarios/login" method="post">
           <div className="Contato-screen-body-item">
             <div className="Contato-app-form">
               <div className="Contato-app-form-group">
                 <input type="text" name="username" className="Contato-app-form-control" placeholder="Usuário"></input>
               </div>
               <div className="Contato-app-form-group message">
                <input type="password" className="Contato-app-form-control" name="senha" placeholder="Senha"></input>
               </div> 
               
               <div className="Contato-app-form-group buttons">
                 <button className="Contato-app-form-button">APAGAR</button>
                 <button type="submit" href="/minhaconta" className="Contato-app-form-button">ENTRAR</button>
               </div>
             </div>
           </div>
        </form>
         </div>
         
       </div>
     
       </div>
     </div>
   </div>
   </div>
    
                </div>
            <RodapeGeral/>
        </>
    )
}
export default Login;