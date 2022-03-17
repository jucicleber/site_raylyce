import React from "react";
import "../app.css";
import logo from "./logo.JPG";
import eventService from "../../eventservice";

const Navbar = (props) => {
  return (
    <nav class="container navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <img
          onClick={() => {
            props.navigationC(true);
            props.navigationP(false);
            props.navigationA(false);
          }}
          id="logo"
          src={logo}
          alt=""
        />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <button
                class="btn btn-outline-primary me-5 buttons"
                aria-current="page"
                // onClick={() => eventService.callback("exibirProdutos")}
                onClick={() => {
                  props.navigationP(true);
                  props.navigationC(false);
                  props.navigationA(false);
                  props.navigationR(false);
                }}
              >
                Produtos
              </button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-outline-danger me-5 buttons"
                // onClick={() => eventService.callback("exibirAdministrativo")}
                onClick={() => {
                  props.navigationP(false);
                  props.navigationC(false);
                  props.navigationA(true);
                }}
              >
                Administrativo
              </button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-outline-warning me-5 buttons"
                //onClick={() => eventService.callback("exibirRastreio")}
                onClick={() => {
                  props.navigationP(false);
                  props.navigationC(false);
                  props.navigationA(false);
                  props.navigationR(true);
                }}
              >
                Rastreio
              </button>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-outline-info me-5 buttons"
                onClick={() => eventService.callback("exibirFaleConosco")}
              >
                Fale Conosco
              </button>
            </li>
            <li class="nav-item">
              <button
                class="btn-outline-success buttons"
                onClick={() => eventService.callback("exibirPedido")}
              >
                Pedido
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
