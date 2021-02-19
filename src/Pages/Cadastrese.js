import MenuAberto from "../Componentes/Menu/MenuAberto";
import React from 'react';
import { BiBriefcase } from 'react-icons/bi';
import RodapeGeral from '../Componentes/Rodape/RodapeGeral';
import { RiContactsBookUploadLine } from 'react-icons/ri'
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
                      <a href='https://www.facebook.com/'><FiFacebook className="icon" /> </a><br />
                      <a href='https://www.instagram.com/'><FiInstagram className='icon' /> </a><br />
                      {/*<a href='https://web.whatsapp.com/'><AiOutlineWhatsApp className='icon'/> </a><br/>*/}
                    </div>
                    <div className="Contato-app-contact">Desenvolvido graças ao RecodePro (2020)</div>
                    <a href="./Login" className="nav-link text-dark btn font-weight-bold">Faça o login</a>

                  </div>
                </div>

                <form action="/login" method="post">
                  <div className="Contato-screen-body-item">
                    <div className="Contato-app-form">
                      <div className="Contato-app-form-group">
                        <input className="Contato-app-form-control" placeholder="UserName" name="username"></input>
                      </div>

                      <div className="Contato-app-form-group message">
                        <input type="text" name="nome" className="Contato-app-form-control" placeholder="Nome"></input>
                      </div>

                      <div className="Contato-app-form-group message">
                        <input type="number" className="Contato-app-form-control" name="cpf" placeholder="CPF"></input>
                      </div>

                      <div className="Contato-app-form-group message">
                        <input type="number" className="Contato-app-form-control" placeholder="Número do Nis" name="numnis"></input>
                      </div>

                      <div className="Contato-app-form-group message">
                        <input type="number" className="Contato-app-form-control" placeholder="Celular" name="celular"></input>
                      </div>

                      <div className="Contato-app-form-group message">
                        <input type="text" className="Contato-app-form-control" placeholder="Email" name="email"></input>
                      </div>

                      <div className="Contato-app-form-group message">
                        <input type="password" className="Contato-app-form-control" placeholder="Senha" name="senha"></input>
                      </div>

                      <div className="Contato-app-form-group buttons">
                        <button className="Contato-app-form-button">APAGAR</button>
                        <button href="./MinhaConta" className="Contato-app-form-button">ENVIAR</button>
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