import MenuFechado from '../Componentes/Menu/MenuFechado';
import './Css/MinhaConta.css'
import Sair from '../Sair'
import {BsPersonSquare} from 'react-icons/bs';
import {BiCommentEdit, BiBriefcase, BiFoodMenu} from 'react-icons/bi';
import { FiEdit, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import RodapeGeral from '../Componentes/Rodape/RodapeGeral'
const MinhaConta = () => {
    return (
        <>
            <MenuFechado />

            <div className="containermc mb-5">
                <div className="row d-flex justify-content-center m-1">
                    <div className="col-md-10  mt-2 mb-4 pt-5">
                        <div className="row z-depth-3 boxPerfil">
                            <div className="col-sm-4  rounded-left">
                                <div className="card-block text-center text-white">
                                    <BsPersonSquare className="iconMinhaConta mt-5"/>
                                    <h2 className="font-weight-bold mt-4">Name</h2>
                                  
                                    <FiEdit className="fiEdit mb-3"/>
                                    <ul className="list-unstyled d-flex justify-content-center mt-4">
                                        <li><a href="#"> <FiFacebook className="iconContatoConta"/> </a></li>
                                        <li><a href="#"> <FiTwitter className="iconContatoConta"/> </a></li>
                                        <li><a href="#"> <FiInstagram className="iconContatoConta"/> </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-8 bg-white rounded-right">
                                <h3 className="mt-3 text-center">Informaçoes</h3>
                                <hr className="badge-primary mt-0 w-25 ml-auto mr-auto"></hr>
                                <div className="row mb-3">
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Email:</p>
                                        <h6 className="text-muted">teste@gmail.com</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Telefone:</p>
                                        <h6 className="text-muted">(11)997765-9090</h6>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Username:</p>
                                        <h6 className="text-muted">@algumacoisa</h6>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="font-weight-bold">Cidade:</p>
                                        <h6 className="text-muted">Sao Paulo</h6>
                                    </div>
                                </div>
                                <hr className="bg-primary"></hr>
                                <div className="row text-center mb-3">
                                    <div className="col-sm-4">
                                        <p className="font-weight-bold">Cadastrar Produtos</p>
                                        <h6 className="text-muted"><a href="/cadastrarprodutos"><BiFoodMenu className='icon-minha-conta'/></a></h6>
                                    </div>
                                    <div className="col-sm-4">
                                        <p className="font-weight-bold">Cadastrar Serviço</p>
                                        <h6 className="text-muted"><a href="/cadastrarservicos"><BiBriefcase className='icon-minha-conta'/></a></h6>
                                    </div>

                                    <div className="col-sm-4">
                                        <p className="font-weight-bold">Editar Dados</p>
                                        <h6 className="text-muted"><a href="/editardados" ><BiCommentEdit className='icon-minha-conta'/></a></h6>
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
export default MinhaConta;