import Footer from "componets/Footer";
import NavBar from "componets/NavBar";
import { Link } from "react-router-dom";

const Contatos = () => {
    return (
      <>
      <NavBar />
      
      <div className="container">
      <div className="jumbotron">
          <h2 className="display-9">Contatos</h2>
          <hr/>
          <p className="lead"><div>
            <a href="https://github.com/AdrielLeao" target="_blank" rel="noreferrer"> Adriel Leão </a>
            </div>
            <div>
                <a href="https://github.com/Carolaynebarret" target="_blank" rel="noreferrer">Carolayne Barreto </a>
            </div>
            <div>
                <a href="https://github.com/danielicapui" target="_blank" rel="noreferrer">Daniel Lucas </a>
            </div>
            <div>
                <a href="https://github.com/fagner73" target="_blank" rel="noreferrer">José Fagner </a>
            </div>
                <a href="https://github.com/rodrygocb" target="_blank" rel="noreferrer">Rodrigo Costa </a></p>
      </div>
      <hr/>
  </div>
    
       <Footer />
    </>
      );
    }
    
    export default Contatos;
    