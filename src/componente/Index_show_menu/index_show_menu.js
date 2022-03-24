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

        <div className="col-6 d-flex justify-content-center align-items-right p-5">
          <a href="https://www.instagram.com/raylycerecortesalaser/">
            <i className="bi bi-instagram fs-1 text-danger"></i>
          </a>
          <a href="https://www.facebook.com/search/top?q=raylyce">
            <i className="bi bi-facebook fs-1 text-primary"></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=65996937009&text=Ola!">
            <i className="bi bi-whatsapp fs-1 text-success"></i>
          </a>
        </div>
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
                  Administrativo
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
