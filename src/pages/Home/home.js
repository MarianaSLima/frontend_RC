import Postagens from '../../componentes/Postagens/posts';
import Header from '../../componentes/Header/header';
import { useEffect, useState } from 'react';
import { useAuth } from '../../auth/ProvideAuth';
import '../../assets/css/styleALL.css';

function Modal(props) { 

    const [imgLoad, setImgLoad] = useState();

    function handleChangeFile(e) {
        const [file] = e.target.files;
        setImgLoad(URL.createObjectURL(file));
      }

    const [dados, setDados] = useState({
        textarea:'', 
        file:'',
      });      
    
      function handleChange(e) {
        setDados({ ...dados, [e.target.name]: e.target.value });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
      console.log(dados); 
      }
    
    return(
      <div className='modal-area'>
        <main class='main-newPost'>
            <form className='form-newPost' onSubmit={handleSubmit}>
                <section className='cx-newPost-input'>
                    <section className='area-perfil-newPost'>
                        <div class="perfil-foto-newPost">
                            Foto
                        </div>
                        <div class="perfil-nome-newPost">
                            Nome Usuário
                        </div> 
                    </section>
                </section>
                <section className='cx-newPost-input'>
                    <section className='envio-img-newPost'>
                        <img src={imgLoad} width="90px" />
                        <input type='file' id='file' name='file' onChange={handleChangeFile}/>
                    </section>
                    <section className='mapa-newPost'>
                        <div>

                        </div>
                    </section>
                    
                </section>
                <section className='cx-newPost-input'>
                    <textarea placeholder='Escreva sua mensagem...' id='textarea' name='textarea' value={dados.textarea} onChange={handleChange}></textarea>
                </section>
                <section className='cx-newPost-btn'>
                    <button type='submit' className='btn-1' > Enviar</button>
                    <button type='button' className='btn-2' onClick={()=> {props.showModal(false)}}>Cancelar</button>
                </section>
            </form>
        </main>
      </div>
    )
  }

function Home(){
    const [showModal, setShowModal] = useState(false);
    const [postagens, setPostagens] = useState([])
    const auth = useAuth();
    useEffect(() => {
        if(postagens.length === 0) {
            auth.getPosts(()=> {
                setPostagens(auth.postagens);
            }); 
        }           
    });
    console.log(postagens);
    return(
        <>
        {showModal && 
            <Modal showModal={setShowModal}  />
        }
        
        <Header/>
            <nav>
                <section id="nav_class">
                <section id="bt_ordenar">
                        <a class="Média" onClick={() => setShowModal(true)}>+</a>
                    </section>
                    <section id="txt_nav">
                        <h1>Classificar por prioridades</h1>
                    </section>
                    <section id="bt_ordenar">
                        <a class="Baixa" href="#">Baixa</a>
                        <a class="Média" href="#">Média</a>
                        <a class="Importante" href="#">Importante</a>
                    </section>
                </section>
            </nav>
            <main>
                <section class="postagens">
                    {
                        postagens.map((post, index) => {
                            return <Postagens 
                                    key={index} 
                                    dados={post} />
                        })
                    }
                    
                </section>
            </main>
        </>
    );
}
export default Home;