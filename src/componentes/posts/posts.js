import './posts.css';
import UserImg from '../../images/user.png';

function Postagens() {
    return (
        <>
            <div className='feed-area'>
                <div className="post-area">
                    <div className="post-content">
                        <div className="user-post-info">
                            <div className="user-post-info-left">
                                <div className="post-user-perfil">
                                    <img src={UserImg} alt="Usuário" />

                                    <div className="user-post-nickcomment">
                                        <h4 className="miniuser-nick-post">Usuário</h4>
                                        <p className="data-comment">há 1 dias</p>
                                    </div>
                                </div>

                                <div className="post-user-comment">
                                    <p>Minha primeira postagem.</p>
                                </div>
                            </div>
                            <div className="user-post-info-right">
                                <i className="fa-solid fa-ellipsis"></i>

                            </div>
                        </div>
                        <div className="post-media">
                            ...
                        </div>
                    </div>
                    <div className="post-options">
                        <span><i className="fa-regular fa-thumbs-up"></i>Curtidas (0)</span>
                        <span><i className="fa-regular fa-comment-dots"></i>Comentários (0)</span>
                        <span><i className="fa-solid fa-share-nodes"></i>Compartilhamentos (0)</span>
                    </div>

                    <div className="post-comments">
                        <div className="post-comment">
                            <div className="comment-left">
                                <div className="post-content-image">
                                    <img src={UserImg} alt="Usuário" />

                                    <h4 className="miniuser-nick-comment">Usuário:</h4>
                                </div>
                                <div className="post-comment-content">
                                    <p>Parabéns sensacional</p>
                                </div>
                                <p className="data-comment">há 1 dias</p>
                            </div>
                            <div className="comment-right">
                                <span className="upvote">
                                    <p className="data-comment">0</p><i className="fa-regular fa-thumbs-up"></i>
                                </span>
                                <span className="downvote">
                                    <p className="data-comment">0</p><i className="fa-regular fa-thumbs-down"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Postagens;