import { useState } from 'react';
import './cadastro.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/ProvideAuth'
import Logo from '../../assets/img/logo_2.png';



function Cadastro() {
    console.log("aqui");
    const auth = useAuth();
    const [dados, setDados] = useState({
        email: '',
        Usuario: '',
        senha: '',
        file: '',
    });

    const [ImgLoad, setImgLoad] = useState();
    function handleChangeFile(e) {
        const [file] = e.target.files
        setImgLoad(URL.createObjectURL(file))
    }

    function handleChange(e) {
        setDados({ ...dados, [e.target.name]: e.target.value });
    }
    let Navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        auth.signup(() => {
            Navigate("/login")
        });
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
                                    <img src={ImgLoad} width="90px" />
                                    <input type='file' id='file' name='file' onChange={handleChangeFile} />
                                </section>
                            </section>
                                <section class="cx_interacao">
                                    <label>Usuario</label>
                                    <input type="text" id="Usuario" name="Usuario" placeholder="Nome de Usuario" value={dados.Usuario} onChange={handleChange} />
                                </section>
                                <section class="cx_interacao">
                                    <label>E-mail</label>
                                    <input type="text" id="email" name="email" placeholder="Email aqui" value={dados.email} onChange={handleChange} />
                                </section>
                                <section class="cx_interacao">
                                    <label>Senha</label>
                                    <input type="password" id="senha" name="senha" placeholder="senha aqui" value={dados.senha} onChange={handleChange} />
                                </section>
                                <section class="cx_interacao">
                                    <label>Confirme a Senha</label>
                                    <input type="password" id="senha" name="senha" placeholder="senha aqui" value={dados.senhacompare} onChange={handleChange} />
                                </section>
                            <section class="cx_bt">
                                <button type='submit' className='btn-1' > Criar Conta</button>
                            </section>
                            <hr />
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