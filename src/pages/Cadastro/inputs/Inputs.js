import React from "react";
import {Input, CampoArea, Label, InputArea} from '../styled';

function Campo(props) {
    return (
        <>
            <CampoArea>
                <Label name={props.name}> {props.label}:
                </Label>
                <InputArea>
                    <Input name={props.name}
                        type={props.tipo}
                        placeholder={props.hint}
                        id={props.name} />
                </InputArea>

            </CampoArea>
        </>
    );
}

export default Campo;
