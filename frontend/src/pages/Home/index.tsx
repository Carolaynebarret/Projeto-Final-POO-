import Footer from "componets/Footer";
import NavBar from "componets/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <>
      <NavBar />
      
      <div className="container">
      <div className="jumbotron">
          <h1 className="display-4">Projeto Final</h1>
          <p className="lead">Analise por diferentes perspectivas</p>
          <hr/>
          <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um formulario.</p>
          <Link className= "btn btn-primary btn-lg"to="/formulario">
          Acessar formulario
        </Link>
      </div>
  </div>
       <Footer />
    </>
      
    );
}

export default Home;
