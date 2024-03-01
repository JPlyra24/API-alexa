import Logo from '../../images/Logo.png'
import './Cadastro.css'
import UserRegistrationForm from '../../components/RegistroUsuario';

export const Cadastro = () => {
    return(
     <div>
        <div className='imageDiv'>
            <img className='image' src={Logo} alt="Logo Cartões Rápidos"
            width={150}/>
        </div>
            <UserRegistrationForm/>
     </div>
    );
} 