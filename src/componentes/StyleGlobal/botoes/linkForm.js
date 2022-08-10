import React from "react";
import { LinkFormulario } from '../styled';

function LinkForm(props) {
    return (
        <>
            <LinkFormulario
                fonteSize = {props.fonteSize}
                cor = {props.cor}

            >
                {props.children}
            </LinkFormulario>
        </>
    );
}

export default LinkForm;
