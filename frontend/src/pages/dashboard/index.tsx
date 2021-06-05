import Footer from "componets/Footer";
import GraficoBarras from "componets/DonutChart";
import Grafico from "componets/DonutChart";
import Graficoteste from "componets/BarChart";
import NavBar from "componets/NavBar";
import { Link } from "react-router-dom";

const Dashboard = () => {
<<<<<<< HEAD
    return (
        <>
        <NavBar />
        <body>
        <div className="container" >
          <h2 className="bs-font-sans-serif " >  Dados  </h2>
  
          <Link className="btn btn-primary " to="/">
            Página Inicial
=======
  return (
    <>
      <NavBar />
      <div className="container" >
        <h2 className="bs-font-sans-serif " >  Dados  </h2>
        <Link className="btn btn-primary btn-lg" to="/">
          Página Inicial
>>>>>>> 7d8873d1082599c77426299807431357b8bfb430
          </Link>
        <div className="row px-3">
          <div className="col-sm-6">
            <GraficoBarras />
          </div>
          <div className="col-sm-6">
            <Graficoteste />
          </div>
        </div>
      </div>

      <Footer />
    </>

  );
}

export default Dashboard;
