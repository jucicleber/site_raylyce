import React from "react";
import broches from "../img/carrosel/broches.JPG";
import chaveiro from "../img/carrosel/chaveiro.JPG";
import placa from "../img/carrosel/placa.JPG";
import "../app.css";

const Carousel = () => {
  return (
    <div
      id="myCarousel"
      className="container carousel slide rounded mx-auto d-block mt-3 "
      data-ride="carousel"
    >
      {/* <!-- Indicators --> */}
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      {/* <!-- Wrapper for slides --> */}
      <div className="carousel-inner">
         
        <div className="item active ">
         
          <p id="pChaveiro">Chaveiros Personalizados, faça seu pedido.</p>
          <img
            src={chaveiro}
            alt="Los Angeles"
            className="rounded mx-auto d-block img-fluid"
          />
        </div>

        <div className="item">
          <p id="placaQrCode">
            Placas Qr Code peça já o seu e acompanhe a evolução da erá Pix.
          </p>
          <img
            className="rounded mx-auto d-block img-fluid"
            src={placa}
            alt="Chicago"
          />
        </div>

        <div className="item">
          <p id="broches">
            Broches de identificação Empresárial, peça já para seus
            funcionários.
          </p>
          <img
            className="rounded mx-auto d-block img-fluid"
            src={broches}
            alt="New York"
          />
        </div>
      </div>

      {/* <!-- Left and right controls --> */}
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Anterior</span>
      </a>
      <a
        className="right carousel-control"
        href="#myCarousel"
        data-slide="next"
      >
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Próximo</span>
      </a>
    </div>
  );
};

export default Carousel;
