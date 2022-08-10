import { useState } from 'react';
import '../../assets/css/styleALL.css';
import { useAuth } from '../../auth/ProvideAuth';
import Header from '../../componentes/Header/header';
import { useNavigate } from 'react-router-dom';
import Cadastro from '../Cadastro/cadastro';



function Login() {

    const auth = useAuth();

    const [dados, setDados] = useState({
        email: '',
        senha: '',
    });

    function handleChange(e) {
        setDados({ ...dados, [e.target.name]: e.target.value });
    }

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(dados);

        auth.signin(() => {
            navigate("/")
        });
    }
    function handleCadastro(e) {
        e.preventDefault();

        auth.signup(() => {
            navigate("/cadastro")
        });
    }


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
                                <input type="text" id="email" name="email" placeholder="Email aqui" value={dados.email} onChange={handleChange} />
                            </section>
                            <section class="cx_interacao">
                                <label>Senha</label>
                                <input type="password" id="senha" name="senha" placeholder="senha aqui" value={dados.senha} onChange={handleChange} />
                            </section>
                            <section class="cx_bt">
                                <input type='submit' value="entrar" />
                            </section>
                            <hr />
                            <section class="cx_links">
                                <a href="#">Esqueci minha senha</a>
                                <a onClick={handleCadastro}>Cadastrar nova conta</a>
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