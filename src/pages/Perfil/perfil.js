import UserImg from '../../assets/img/user.png';
import Header from '../../componentes/Header/header';
import Postagens from '../../componentes/Postagens/posts';
import '../../assets/css/styleALL.css';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../auth/ProvideAuth';

function Perfil() {
    const [postagens, setPostagens] = useState([])
    const auth = useAuth();
    useEffect(() => {
        if (postagens.length === 0) {
            auth.getPosts(() => {
                setPostagens(auth.postagens);
            });
        }
    });
    console.log(postagens);
    return (
        <>
            <Header />
            <div class="perfil-content">

                <div class="perfil-background">
                </div>

                <div class="perfil-info-esquerda">

                    <div class="perfil-foto">
                        <img src={UserImg} alt="Usuário" />
                    </div>

                    <div class="perfil-seguidores">
                        <div class="user-name">
                            <h3>Nome do usuário</h3>
                        </div>
                        <div class="avaliacao">
                            <p> Avaliações:
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                (0 votos)
                            </p>
                        </div>
                        <div class="perfil-text">
                            <p><strong>{postagens.length}</strong> publicações</p>
                            <p><strong>0</strong> seguidores</p>
                            <p><strong>0</strong> seguindo</p>
                        </div>
                    </div>

                </div>
                <div class="perfil-info-direita">
                    <div class="botoes">
                        <button class="btn-seguir">Seguir</button>
                        <button class="btn-avaliar">Avaliar</button>
                    </div>
                </div>
            </div>
            <div class="align-bio-feed">
                <div class="content-bio-feed">
                    <div class="biografia">
                        <div class="bio-top">
                            <h1>Bio</h1>
                            <p>Textinho -- Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima labore
                                voluptas maiores nostrum velit eaque deserunt quibusdam expedita voluptate, adipisci fugiat
                                omnis consequatur nulla quos, quas nihil sint culpa?</p>
                        </div>
                        <div class="bio-bot">
                            <h1> Informações de Fulano de tal</h1>
                            <ul>
                                <li><i class="fa-solid fa-briefcase"></i>Trabalho</li>
                                <li><i class="fa-solid fa-location-dot"></i>Nascido em tal Cidade</li>
                                <li><i class="fa-solid fa-location-dot"></i>Onde estudou</li>
                                <li><i class="fa-regular fa-calendar-days"></i>Idade</li>
                                <li><i class="fa-regular fa-calendar"></i>Perfil criado há quanto tempo</li>
                            </ul>
                        </div>

                    </div>
                    <section class="postagens">
                        <div className='Posts-area'>
                            {
                                postagens.map((post, index) => {
                                    return <Postagens
                                        key={index}
                                        dados={post} />
                                })
                            }
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Perfil;