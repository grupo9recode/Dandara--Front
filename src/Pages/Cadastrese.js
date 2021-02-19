import MenuAberto from "../Componentes/Menu/MenuAberto";
import React from 'react';
import { BiBriefcase } from 'react-icons/bi';
import RodapeGeral from '../Componentes/Rodape/RodapeGeral';
import { RiContactsBookUploadLine } from 'react-icons/ri';
import './Css/Cadastrese.css'
import { FiInstagram, FiFacebook, AiOutlineWhatsApp } from 'react-icons/fi';


const Cadastrese = () => {
  const url = "http://localhost:3050/registro";
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

  /*function pegarInfo({ target }) {
      const { id, value } = target
      setForm({ ...form, [id]: value })
      console.log({ [id]: value });
  }
*/
  function pegarDados(event) {
      fetch('http://localhost:3050/usuarios/registro', {
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

  /*const Enviar = () => {
      if (alert("Cadastro feito!")) {
          window.location.href='/login';
      }
  }
*/
  return (
    <>

      <MenuAberto />
      <div>


        <div><div className="CadastroBackground">
          <div className="CadastroContainer">
            <div className="CadastroScreen">
              <div className="Cadastro-Screen-header">
                <div className="Cadastro-Screen-header-left">
                  <div className="Cadastro-Screen-header-button close"></div>
                  <div className="Cadastro-Screen-header-button maximize"></div>
                  <div className="Cadastro-Screen-header-button minimize"></div>
                </div>
                <div className="Cadastro-Screen-header-right">
                  <div className="Cadastro-Screen-header-ellipsis"></div>
                  <div className="Cadastro-Screen-header-ellipsis"></div>
                  <div className="Cadastro-Screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="Cadastro-screen-body">
                <div className="Cadastro-screen-body-item left">
                  <div className="Cadastro-app-title">
                    <span>Faça o</span>
                    <span>CADASTRO!</span>
                  </div>
                  <div id="alternativeLogin">
                    <div id="iconGroup">
                      <a href='https://www.facebook.com/'><FiFacebook className="icon" /> </a><br />
                      <a href='https://www.instagram.com/'><FiInstagram className='icon' /> </a><br />
                      {/*<a href='https://web.whatsapp.com/'><AiOutlineWhatsApp className='icon'/> </a><br/>*/}
                    </div>
                    <div className="Cadastro-app-contact">Desenvolvido graças ao RecodePro (2020)</div>
                    <a href="./Login" className="nav-link text-dark btn font-weight-bold">Faça o login</a>

                  </div>
                </div>

                <form action="/login" method="post">
                  <div className="Cadastro-screen-body-item">
                    <div className="Cadastro-app-form">
                      <div className="Cadastro-app-form-group">
                        <input className="Cadastro-app-form-control" placeholder="UserName" name="username"></input>
                      </div>

                      <div className="Cadastro-app-form-group message">
                        <input type="text" name="nome" className="Cadastro-app-form-control" placeholder="Nome"></input>
                      </div>

                      <div className="Cadastro-app-form-group message">
                        <input type="number" className="Cadastro-app-form-control" name="cpf" placeholder="CPF"></input>
                      </div>

                      <div className="Cadastro-app-form-group message">
                        <input type="number" className="Cadastro-app-form-control" placeholder="Número do Nis" name="numnis"></input>
                      </div>

                      <div className="Cadastro-app-form-group message">
                        <input type="number" className="Cadastro-app-form-control" placeholder="Celular" name="celular"></input>
                      </div>

                      <div className="Cadastro-app-form-group message">
                        <input type="text" className="Cadastro-app-form-control" placeholder="Email" name="email"></input>
                      </div>

                      <div className="Cadastro-app-form-group message">
                        <input type="password" className="Cadastro-app-form-control" placeholder="Senha" name="senha"></input>
                      </div>

                      <div className="Cadastro-app-form-group buttons">
                        <button className="Cadastro-app-form-button">APAGAR</button>
                        <button href="./MinhaConta" className="Cadastro-app-form-button">ENVIAR</button>
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
      <RodapeGeral />
    </>
  )
}
export default Cadastrese;


/*{{#each erros}}
    {{texto}}
{{else}}

{{/each}}

/*<form action="/usuarios/registro" method="post">
    <label for="nome">Nome: </label>
        <input type="text" name="nome" class="form-control" required>
    <label for="email">Email:</label>
        <input type="email" name="email" class="form-control" required>
    <label for="senha">Senha: </label>
        <input type="password" name="senha" class="form-control" required>
    <label for="senha2">Repita a sua senha: </label>
        <input type="password" name="senha2" class="form-control" required>
    <button type="submit" class="btn btn-sucess">Criar conta</button>
</form>*/