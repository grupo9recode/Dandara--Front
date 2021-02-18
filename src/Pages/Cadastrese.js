import Menu from "../Componentes/Menu/Menu";
import React from 'react';
import {BiBriefcase} from 'react-icons/bi';
import RodapeGeral from '../Componentes/Rodape/RodapeGeral';
import {RiContactsBookUploadLine} from 'react-icons/ri'
import { FiInstagram, FiFacebook, AiOutlineWhatsApp} from 'react-icons/fi';


const Cadastrese = () => {
    const url = "http://localhost:3005/cadastrese";
    const [form, setForm] = React.useState({
        
        id_usuario: "",
        nome: "",
        cpf: "",
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
        fetch('http://localhost:3005/cadastrese', {
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
           <div className="container container-fluid  d-flex mt-6 mb-6 contato">
            <a href='/'><img src={require('../Imagens/onceicao.png').default} alt="" width="300" className='imagem-contato mr-5'/></a>
                <div className="p-3 border mt-3 menu bg-white ml-auto mr-auto ">
                    <div className="form-icon">
                        <span><RiContactsBookUploadLine/></span>
                    </div>
                </div>
                </div>     
                          
                
                   
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
               <span>Duvidas?</span>
               <span>chama no zap!</span>
             </div>
             <div id="alternativeLogin">
                   <div id="iconGroup">
                    <a href='https://www.facebook.com/'><FiFacebook className="icon" /> </a><br/>
                    <a href='https://www.instagram.com/'><FiInstagram className='icon'/> </a><br/>
                    {/*<a href='https://web.whatsapp.com/'><AiOutlineWhatsApp className='icon'/> </a><br/>*/}
                </div>
                <div className="Contato-app-contact">Desenvolvido graças ao RecodePro (2020)</div>
                </div>
           </div>
           <div className="Contato-screen-body-item">
             <div className="Contato-app-form">
               <div className="Contato-app-form-group">
                 <input className="Contato-app-form-control" placeholder="NAME" value="nome"></input>
               </div>
               <div className="Contato-app-form-group">
                 <input className="Contato-app-form-control" placeholder="EMAIL"></input>
               </div>
               <div className="Contato-app-form-group message">
                <input className="Contato-app-form-control" placeholder="mensagem"></input>
               </div> 
               <div className="Contato-app-form-group buttons">
                 <button className="Contato-app-form-button">APAGAR</button>
                 <button className="Contato-app-form-button">ENVIAR</button>
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