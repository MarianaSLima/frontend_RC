import Logo from '../../assets/img/logo_2.png';
import { useAuth } from '../../auth/ProvideAuth';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/styleALL.css';

function Header(){
    const auth = useAuth();
    let navigate = useNavigate();
    function logout() {
        auth.signout(() => {
            navigate("/");
        });
    }
    return(
        <>
        <header>
            
            <section id="ft_perfil">
            {auth.user &&
                <a href='http://localhost:3000/perfil'><i class="fa-solid fa-user"></i></a>
            }
            </section>
            
            <section id="ft_logo">
                <a href='http://localhost:3000/'><img src={Logo} alt='logo Reclama Cidade'/></a>
            </section>
            <section id="config">
            {auth.user &&
                <a onClick={() => logout()}><i class="fa-solid fa-right-from-bracket"></i></a>
            }
            </section>
        </header>
        </>
    );
}

export default Header;