import React from "react";
import { Btn } from '../styled';

function Botao(props) {
    return (
        <>
            <Btn largura={props.largura}
                altura={props.altura}
                fonteSize={props.fonteSize}
                cor={props.cor}
                corFundo={props.corFundo}
                onClick= {props.ClickBtnCadCancel}
                type={props.tipo}
                value={props.nome}
            />
        </>
    );
}

export default Botao;
