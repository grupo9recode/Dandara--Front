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
           <div className="container container-fluid  d-flex mt-6 mb-6 Login">
            <a href='/'><img src={require('../Imagens/imponente.png').default} alt="" width="300" className='imagem-Login mr-5'/></a>
                  
<div><div className="LoginBackgroundlg">
     <div className="LoginContainer">
       <div className="LoginScreen">
         <div className="Login-Screen-header">
           <div className="Login-Screen-header-left">
             <div className="Login-Screen-header-button close"></div>
             <div className="Login-Screen-header-button maximize"></div>
             <div className="Login-Screen-header-button minimize"></div>
           </div>
           <div className="Login-Screen-header-right">
             <div className="Login-Screen-header-ellipsis"></div>
             <div className="Login-Screen-header-ellipsis"></div>
             <div className="Login-Screen-header-ellipsis"></div>
           </div>
         </div>
         <div className="Login-screen-body">
           <div className="Login-screen-body-item left">
             <div className="Login-app-title">
               <span>Faça o</span>
               <span>Login!</span>
             </div>
             <div id="alternativeLogin">
                   <div id="iconGroup">
                    <a href='https://www.facebook.com/'><FiFacebook className="icon" /> </a><br/>
                    <a href='https://www.instagram.com/'><FiInstagram className='icon'/> </a><br/>
                    {/*<a href='https://web.whatsapp.com/'><AiOutlineWhatsApp className='icon'/> </a><br/>*/}
                </div>
                <div className="Login-app-contact">Desenvolvido graças ao RecodePro (2020)</div>
                <a href="./RecuperarSenha" className="nav-link text-dark btn font-weight-bold">Esqueci minha senha</a>
                            <a href="/Cadastrese" className="nav-link text-dark btn font-weight-bold">Cadastre-se</a>
                </div>
           </div>

   

           <form action="http://localhost:3050/usuarios/login" method="post">
           <div className="Login-screen-body-item">
             <div className="Login-app-form">
               <div className="Login-app-form-group">
                 <input type="text" name="username" className="Login-app-form-control" placeholder="Usuário"></input>
               </div>
               <div className="Login-app-form-group message">
                <input type="password" className="Login-app-form-control" name="senha" placeholder="Senha"></input>
               </div> 
               
               <div className="Login-app-form-group buttons">
                 <button className="Login-app-form-button">APAGAR</button>
                 <button type="submit" href="/minhaconta" className="Login-app-form-button">ENTRAR</button>
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