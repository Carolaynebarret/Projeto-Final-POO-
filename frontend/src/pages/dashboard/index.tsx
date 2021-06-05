import Footer from "componets/Footer";
import NavBar from "componets/NavBar";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
        <NavBar />
        <body>
        <div className="container" >
          <h2 className="bs-font-sans-serif " >  Dados  </h2>
  
          <Link className="btn btn-primary " to="/">
            Página Inicial
          </Link>
        </div>
        </body>
  
        <Footer />
      </>
  
    );
}

export default Dashboard;
