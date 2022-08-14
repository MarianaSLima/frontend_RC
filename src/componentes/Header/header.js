import Logo from '../../assets/img/logo_2.png';
import '../../assets/css/styleALL.css';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/modules/usuario/actions';

function Header(){
    const user = useSelector(({usuario}) => usuario.currentUser);
    let dispatch = useDispatch();

    return(
        <>
        <header>
            
            <section id="ft_perfil">
            {user &&
                <a href='http://localhost:3000/perfil'><i class="fa-solid fa-user"></i></a>
            }
            </section>
            
            <section id="ft_logo">
                <a href='http://localhost:3000/'><img src={Logo} alt='logo Reclama Cidade'/></a>
            </section>
            <section id="config">
            {user &&
                <a onClick={() => dispatch(logOut())}><i class="fa-solid fa-right-from-bracket"></i></a>
            }
            </section>
        </header>
        </>
    );
}

export default Header;