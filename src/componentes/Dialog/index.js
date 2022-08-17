function Dialog(props) {

    return (
        <>
            <div className="modal-area">
                <div className="dialog-content">
                    <div className="tipo-mensagem"><h1>Erro:</h1></div>

                    <div className="mensagem"><p>{props.mensagem}</p></div>

                    <div className="btn-dialog">
                    <button onClick={() => {props.openDialog(false)}}>OK</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dialog;