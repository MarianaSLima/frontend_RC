import { useState } from 'react';
import Logo from '../../assets/img/logo_2.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerStart } from '../../store/modules/usuario/actions';



function Cadastro() {
    const auth = useSelector(({ usuario }) => usuario);
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const [credentials, setCredentials] = useState({
        nome: '',
        sobrenome: '',
        datanasc: '',
        email: '',
        password: '',
        passwordcompare: ''

    });

    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (credentials.passwordcompare === credentials.password) {
            dispatch(registerStart(credentials));
        }
    }

    return (
        <>
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
                                    <img width="90px" />
                                    <input type='file' id='file' name='file' />
                                </section>
                            </section>
                            <section class="cx_interacao">
                                <label>Nome</label>
                                <input type="text" id="nome" name="nome" placeholder="Nome" value={credentials.Usuario} onChange={handleChange} />
                            </section>
                            <section class="cx_interacao">
                                <label>Sobrenome</label>
                                <input type="text" id="sobrenome" name="sobrenome" placeholder="Sobrenome" value={credentials.sobrenome} onChange={handleChange} />
                            </section>
                            <section class="cx_interacao">
                                <label>Data de Nascimento</label>
                                <input type="date" id="datanasc" name="datanasc" value={credentials.datanasc} onChange={handleChange} />
                            </section>
                            <section class="cx_interacao">
                                <label>E-mail</label>
                                <input type="text" id="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} />
                            </section>
                            <section class="cx_interacao">
                                <label>Senha</label>
                                <input type="password" id="password" name="password" placeholder="Senha" value={credentials.password} onChange={handleChange} />
                            </section>
                            <section class="cx_interacao">
                                <label>Confirme a senha</label>
                                <input type="password" id="passwordcompare" name="passwordcompare" placeholder="Confirmação a senha" value={credentials.passwordcompare} onChange={handleChange} />
                            </section>
                            <section class="cx_bt">
                                <button type='submit'> Criar Conta</button>
                            </section>
                            <hr/>
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