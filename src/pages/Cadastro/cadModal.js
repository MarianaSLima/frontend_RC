import React from "react";
import Campo from './inputs/Inputs';
import Botao from './botao/Botao';

function CadModal(props) {
    return ( 
        <div className='modal-area'>
            <div className='Conteudo'>
            
                <div className='cad-inputs'>
                    <h1 className='titulo'>Cadastro</h1>
                    <Campo
                        name="nome"
                        tipo="text"
                        label="Nome completo"
                        hint="Luiz Costa da Silva" />

                    <Campo
                        name="nascimento"
                        tipo="date"
                        label="Data de Nascimento" />

                    <Campo
                        name="email"
                        tipo="email"
                        label="E-mail"
                        hint="Luiz.CostaSilva@hotmail.com" />

                    <Campo
                        name="senha"
                        tipo="password"
                        label="Senha"
                        hint="Senha" />

                </div>

                <div className='cad-btn'>

                    <Botao largura="120"
                        altura="50"
                        fonteSize="20"
                        cor="3257d3"
                        corFundo="000"
                        tipo="submit"
                        nome="Enviar" />

                    <Botao largura="120"
                        altura="50"
                        fonteSize="20"
                        cor="3257d3"
                        corFundo="000"
                        tipo="submit"
                        nome="Cancelar"
                        ClickBtnCadCancel= {() => { props.showCadModal(false) }}
                        />
                </div>
            </div>
        </div>
    );
}

export default CadModal;
