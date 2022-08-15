import { useNavigate } from "react-router-dom";

function Dialog(props) {
    let navigate = useNavigate();
console.log(props.mensagem.destino);

    return (
        <>
            <div className="modal-area">
                <div className="dialog-content">
                    <div className="tipo-mensagem"><h1>{props.mensagem.tipo}</h1></div>

                    <div className="mensagem"><p>{props.mensagem.texto}</p></div>

                    <div className="btn-dialog">
                    <button onClick={() => {{props.openDialog(false)} navigate(`/${props.mensagem.destino}`)}}>OK</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dialog;