import { useState } from 'react';
import Logo from '../../assets/img/logo_2.png';
import { useDispatch, useSelector } from 'react-redux';
import { registerStart } from '../../store/modules/usuario/actions';
import Dialog from '../../componentes/Dialog';
import { useNavigate } from 'react-router-dom';
import userHolder from '../../assets/img/user.png';
import validator from 'validator';



function Cadastro() {
    const errorApi = useSelector(({ usuario }) => usuario);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [openSpan, setOpenSpan] = useState(false);

    const [emailError, setEmailError] = useState("");

    const [openDialog, setOpenDialog] = useState(false);

    const [credentials, setCredentials] = useState({
        nome: '',
        sobrenome: '',
        fotoUser: userHolder,
        datanasc: '',
        email: '',
        password: '',
        passwordcompare: ''

    });

    const validateEmail = (e) => {
        var testEmail = e.target.value;

        if (validator.isEmail(testEmail)) {
            setOpenSpan(false);
            setCredentials({ email: testEmail });
        } else {
            setOpenSpan(true);
            setEmailError("E-mail inválido!");
        }
    }

    function handleChangeFile(e) {
        const [file] = e.target.files;
        setCredentials({ fotoUser: URL.createObjectURL(file) });
    }

    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(registerStart(credentials));

        if (errorApi.error) {
            setOpenDialog(true);
        }

    }

    return (
        <>

            {openDialog &&
                <Dialog mensagem={errorApi.error} openDialog={setOpenDialog} />
            }

            <header>
                <section id="ft_logo">
                    <a href='http://localhost:3000/'><img src={Logo} alt='logo Reclama Cidade' /></a>
                </section>
            </header>

            <main class='main-cadastro'>
                <section class="cadastro-area">
                    <div class="form-area">
                        <form onSubmit={handleSubmit}>
                            <section class="cx_textLog">
                                <h1>Cadastro</h1>
                            </section>
                            <section className='cx-newPost-input'>
                                <section className='envio-img-newPost'>
                                    <label>
                                        <img src={credentials.fotoUser} />
                                        <p className='edit-file'>Editar</p>
                                    </label>
                                    <input type='file' id='file' name='file' onChange={handleChangeFile} />
                                </section>
                            </section>
                            <section class="cx_interacao">
                                <label>Nome</label>
                                <input type="text" id="nome" name="nome" placeholder="Nome" value={credentials.Usuario} onChange={handleChange} required />
                            </section>
                            <section class="cx_interacao">
                                <label>Sobrenome</label>
                                <input type="text" id="sobrenome" name="sobrenome" placeholder="Sobrenome" value={credentials.sobrenome} onChange={handleChange} required />
                            </section>
                            <section class="cx_interacao">
                                <label>Data de Nascimento</label>
                                <input type="date" id="datanasc" name="datanasc" value={credentials.datanasc} onChange={handleChange} required />
                            </section>
                            <section class="cx_interacao">
                                <label>E-mail</label>
                                <input type="text" id="email" name="email" placeholder="Email" onChange={(e) => validateEmail(e)} required />

                                {openSpan &&
                                <span style={{  fontSize: '12px', color: 'red',}}>{emailError}</span>
                                }
                            </section>

                            <section class="cx_interacao">
                                <label>Senha</label>
                                <input type="password" id="password" name="password" placeholder="Senha" value={credentials.password} onChange={handleChange} required />
                            </section>
                            <section class="cx_interacao">
                                <label>Confirme a senha</label>
                                <input type="password" id="passwordcompare" name="passwordcompare" placeholder="Confirmação a senha" value={credentials.passwordcompare} onChange={handleChange} required />
                            </section>
                            <section class="cx_bt">
                                <button type='submit'> Criar Conta</button>
                            </section>
                            <hr />
                            <section class="cx_links">
                                <a onClick={() => navigate('/login')}>Entre na sua Conta</a>
                            </section>
                        </form>
                    </div>
                    <section class="text_Area">
                        <h1>Cadastre-se aqui para ficar atualizado sobre que acontece na sua cidade!</h1>
                    </section>
                </section>
            </main>
        </>
    );
}



export default Cadastro;