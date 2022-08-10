import UserImg from '../../assets/img/user.png';
import { useState } from 'react';
import '../../assets/css/styleALL.css';

function Postagens(props) {

    const [curtidas, setCurtidas] = useState(props.dados.curtidas);
    function curtidasClick() {
        let newCurtida = curtidas + 1;
        setCurtidas(newCurtida);
    }
    return (
        <>
            <div class='feed-area'>
                <div class="post-area">
                    <div class="post-content">
                        <div class="user-post-info">
                            <div class="user-post-info-left">
                                <div class="post-user-perfil">
                                    <img src={UserImg} alt="Usuário" />

                                    <div class="user-post-nickcomment">
                                        <h4 class="miniuser-nick-post">{props.dados.usuario}</h4>
                                        <p class="data-comment">{props.dados.data}</p>
                                    </div>
                                </div>

                                <div class="post-user-comment">
                                    <p>{props.dados.publicacao}</p>
                                </div>
                            </div>
                            <div class="user-post-info-right">
                                <i class="fa-solid fa-ellipsis"></i>

                            </div>
                        </div>
                        <div class="post-media">
                            ...
                        </div>
                    </div>
                    <div class="post-options">
                        <span onClick={() => curtidasClick()}><i class="fa-regular fa-thumbs-up"></i>Curtidas ({curtidas})</span>
                        <span><i class="fa-regular fa-comment-dots"></i>Comentários ({props.dados.comentarios.length})</span>
                        <span><i class="fa-solid fa-share-nodes"></i>Compartilhamentos (0)</span>
                    </div>

                    <div class="post-comments">

                        {
                            props.dados.comentarios.map((comentario, index) => {
                                return (<div class="post-comment" key={index}>
                                    <div class="comment-left">
                                        <div class="post-content-image">
                                            <img src={UserImg} alt="Usuário" />

                                            <h4 class="miniuser-nick-comment">{comentario.usuario}:</h4>
                                        </div>
                                        <div class="post-comment-content">
                                            <p>{comentario.comentario}</p>
                                        </div>
                                        <p class="data-comment">há 1 dias</p>
                                    </div>
                                    <div class="comment-right">
                                        <span class="upvote">
                                            <p class="data-comment">0</p><i class="fa-regular fa-thumbs-up"></i>
                                        </span>
                                        <span class="downvote">
                                            <p class="data-comment">0</p><i class="fa-regular fa-thumbs-down"></i>
                                        </span>
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Postagens;