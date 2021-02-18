import Menu from "../Componentes/Menu/Menu";
import React from 'react';
import {BiBriefcase} from 'react-icons/bi';
import RodapeGeral from '../Componentes/Rodape/RodapeGeral';
import {RiContactsBookUploadLine} from 'react-icons/ri'
import { FiInstagram, FiFacebook, AiOutlineWhatsApp} from 'react-icons/fi';


const Cadastrese = () => {
    const url = "http://localhost:3005/Cadastrese";
    const [form, setForm] = React.useState({
        
        id_usuario: "",
        nome: "",
        cpf: "",
        nis: "",
        celular: "",
        email: "",
        senha: ""
    });

    const [response, setResponse] = React.useState(null)

    function pegarInfo({ target }) {
        const { id, value } = target
        setForm({ ...form, [id]: value })
        console.log({ [id]: value });
    }

    function pegarDados(event) {
        fetch('http://localhost:3005/Cadastrese', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //transforma em json para mandar pra api e api mandar pro banco
            body: JSON.stringify(form)
        }).then((res) => {
            setResponse(res);
        })
    }

    const Enviar = () => {
        if (alert("Cadastro feito!")) {
            window.location.href='/login';
        }
    }

    return (
        <>
        
            <Menu/>
            <div> 
           
                  
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
               <span>CADASTRO!</span>
             </div>
             <div id="alternativeLogin">
                   <div id="iconGroup">
                    <a href='https://www.facebook.com/'><FiFacebook className="icon" /> </a><br/>
                    <a href='https://www.instagram.com/'><FiInstagram className='icon'/> </a><br/>
                    {/*<a href='https://web.whatsapp.com/'><AiOutlineWhatsApp className='icon'/> </a><br/>*/}
                </div>
                <div className="Contato-app-contact">Desenvolvido graças ao RecodePro (2020)</div>
                <a href="./Login" className="nav-link text-dark btn font-weight-bold">Faça o login</a>
                            
                </div>
           </div>
           <div className="Contato-screen-body-item">
             <div className="Contato-app-form">
               <div className="Contato-app-form-group">
                 <input className="Contato-app-form-control" placeholder="UserName"></input>
               </div>

               <div className="Contato-app-form-group message">
                <input type="Ttext" className="Contato-app-form-control" placeholder="Nome"></input>
               </div> 

               <div className="Contato-app-form-group message">
                <input type="number" className="Contato-app-form-control" placeholder="CPF"></input>
               </div> 

               <div className="Contato-app-form-group message">
                <input type="number" className="Contato-app-form-control" placeholder="Número do Nis"></input>
               </div> 

               <div className="Contato-app-form-group message">
                <input type="number" className="Contato-app-form-control" placeholder="Celular"></input>
               </div> 
               
               <div className="Contato-app-form-group message">
                <input type="text" className="Contato-app-form-control" placeholder="Email"></input>
               </div> 

               <div className="Contato-app-form-group message">
                <input type="password" className="Contato-app-form-control" placeholder="Senha"></input>
               </div> 
               
               <div className="Contato-app-form-group buttons">
                 <button className="Contato-app-form-button">APAGAR</button>
                 <button href="./MinhaConta"  className="Contato-app-form-button">ENVIAR</button>
               </div>
             </div>
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
export default Cadastrese;