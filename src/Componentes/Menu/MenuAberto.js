import { FaStoreAlt} from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import { MdContactMail } from "react-icons/md";

const MenuAberto = () => {
    return (


        <>
            <nav className="navbar navbar-expand-lg navbar-fixed-top menu-container " id='menu'>
            <a href='/'> {/*<img src={require('../../Imagens/menuFechado.png').default} alt="Dandara" width="50"/>*/}/</a>
                <button className="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   
                <span className="navbar-toggler-icon m-auto "></span>
                </button>   
                <div className="collapse navbar-collapse menu-links" id="navbarNav">
                    <ul className="navbar-nav">

                    <li  className="nav-item active">  

                        <a className="nav-link" href="/" to='/'> INÍCIO |</a>
                            <button className="navbar-toggler text-center" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/produtos" to='/produtos'> PRODUTOS |<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/servicos" to='/servicos'> SERVIÇOS |<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/contato" to='/contato'> CONTATO |<span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/login" to='/login'>
                                <button type="button" className="LoginBtn"> ENTRAR |
                                </button><span className="sr-only">(current)</span></a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link text-light" href="/cadastrese" to='cadastrese'>
                                <button type="button" className="CadastreseBtn"> CADASTRE-SE
                                </button><span className="sr-only">(current)</span></a>

                        </li>
                    </ul>
                </div>
            </nav>
        </>
        
    )
}
export default MenuAberto;