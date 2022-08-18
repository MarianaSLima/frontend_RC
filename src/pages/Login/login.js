import { useEffect, useState } from 'react';
import Header from '../../componentes/Header/header';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart } from "../../store/modules/usuario/actions";



function Login() {
    const auth = useSelector(({ usuario }) => usuario);
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(loginStart(credentials));
    }

    useEffect(() => {
        if (auth.currentUser) {
            navigate('/');
        }
    }, [auth]);


    return (
        <>
            <Header />
            <main class='main-login'>
                <section class="login-area">
                    <div class="form-area">
                        <form onSubmit={handleSubmit}>
                            <section class="cx_textLog">
                                <h1>Login</h1>
                            </section>
                            <section class="cx_interacao">
                                <label>E-mail</label>
                                <input type="text" id="email" name="email" placeholder="Email aqui" value={credentials.email} onChange={handleChange} />
                            </section>
                            <section class="cx_interacao">
                                <label>Senha</label>
                                <input type="password" id="password" name="password" placeholder="senha aqui" value={credentials.password} onChange={handleChange} />
                            </section>
                            <section class="cx_bt">
                                <button>Entrar</button>
                            </section>
                            <hr />
                            <section class="cx_links">
                                <a href="#">Esqueci minha senha</a>
                                <a onClick={() => navigate('/cadastro')}>Cadastrar nova conta</a>
                            </section>
                        </form>
                    </div>
                </section>
                <section class="text_Area">
                    <h1>Faça login para ficar atualizado sobre que acontece na sua cidade</h1>
                </section>
            </main>
        </>
    );
}



export default Login;