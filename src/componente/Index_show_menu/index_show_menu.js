import React from "react";
import "../app.css";
import logo from "../img/index_show_menu/logo-crop.JPG";

const Navbar = (props) => {
  return (
    <div id="cor_de_fundo">
      <div className="row">
        <div className="col-6">
          <img
            className="img-fluid rounded-circle"
            onClick={() => {
              props.navigationProduto(false);
              props.navigationCarrosel(true);
              props.navigationAdmministrativo(false);
              props.navigationRastreio(false);
              props.navigationFaleConosco(false);
              props.navigationPedido(false);
            }}
            id="logo"
            src={logo}
            alt=""
          />
        </div>

        <div className="col-4 justify-content-end align-items-right p-3">
          <div className="offset-3 d-flex justify-content-end align-items-right p-3">
             <a href="https://www.instagram.com/raylycerecortesalaser/">
            <i className="bi bi-instagram fs-1 text-danger"></i>
          </a>
          <a href="https://www.facebook.com/search/top?q=raylyce">
            <i className="bi bi-facebook fs-1 text-primary"></i>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5565996937009!"
            id="action-button"
            img={logo}
          >
            <i className="bi bi-whatsapp fs-1 text-success"></i>
          </a>
          </div>
          <div className="offset-10 d-flex justify-content-center align-items-right ">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-cart" viewBox="0 0 20 20">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
          </div>
        </div>
        <div >
          
        </div>
        
      </div>
      <div>
        
      </div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            arial-expanded="false"
            arial-label="toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <button
                  className=" btn btn-outline-primary fs-1 me-1 rounded-pill"
                  onClick={() => {
                    props.navigationProduto(true);
                    props.navigationCarrosel(false);
                    props.navigationAdmministrativo(false);
                    props.navigationRastreio(false);
                    props.navigationFaleConosco(false);
                    props.navigationPedido(false);
                  }}
                >
                  Produtos <span className="sr-only"></span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className=" btn btn-outline-danger fs-1 me-1 rounded-pill"
                  onClick={() => {
                    props.navigationProduto(false);
                    props.navigationCarrosel(false);
                    props.navigationAdmministrativo(true);
                    props.navigationRastreio(false);
                    props.navigationFaleConosco(false);
                    props.navigationPedido(false);
                  }}
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-warning fs-1 me-1 rounded-pill"
                  onClick={() => {
                    props.navigationProduto(false);
                    props.navigationCarrosel(false);
                    props.navigationAdmministrativo(false);
                    props.navigationRastreio(true);
                    props.navigationFaleConosco(false);
                    props.navigationPedido(false);
                  }}
                >
                  Rastreio
                </button>
              </li>
              <li className="nav-item">
                <button
                  className=" btn btn-outline-info fs-1 me-1 rounded-pill"
                  onClick={() => {
                    props.navigationProduto(false);
                    props.navigationCarrosel(false);
                    props.navigationAdmministrativo(false);
                    props.navigationRastreio(false);
                    props.navigationFaleConosco(true);
                    props.navigationPedido(false);
                  }}
                >
                  Fale Conosco
                </button>
              </li>
              <li className="nav-item">
                <button
                  className=" btn btn-outline-success fs-1 me-1 rounded-pill"
                  onClick={() => {
                    props.navigationProduto(false);
                    props.navigationCarrosel(false);
                    props.navigationAdmministrativo(false);
                    props.navigationRastreio(false);
                    props.navigationFaleConosco(false);
                    props.navigationPedido(true);
                  }}
                >
                  Pedido
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;


//