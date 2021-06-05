import Img from 'assets/img/EMPREGOS (2).png'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
            <div className="container">
              

                    
                    <nav id="menu">
    <ul>
    <img src={Img} alt="Projeto Final" width="100" />
        
        <li><a href="/">Home</a></li>
        <li><a href="/Formulario">Formulário </a></li>
        <li><a href="/dashboard"> Gráficos </a></li>
        <li><a href="#">Links</a></li>
        <li><a href="#">Contato</a></li>
    </ul>

    
</nav>


               
            </div>
        </div>
    );
}

export default NavBar;
