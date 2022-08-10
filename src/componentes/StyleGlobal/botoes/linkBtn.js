import React from "react";
import { Link } from '../styled';

function LinkBtn(props) {
    return (
        <>
            <Link
                corFundo={props.corFundo}
            >
                {props.children}
            </Link>
        </>
    );
}

export default Link;
