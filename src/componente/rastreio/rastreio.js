import React from "react";

const Rastreio = () => {
  return (
    <div className="container">
      <div className="card">
        <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
            
            <a href="https://rastreamento.correios.com.br/app/index.php">
              <button
                class="btn btn-outline-warning btn-lg fs-1 me-1 rounded-pill"
                type="button"
              >
                Rastreio Correios
              </button>
            </a>
            <a href="https://www.azulcargoexpress.com.br/Rastreio/Rastreio">
              <button
                class="btn btn-outline-warning btn-lg fs-1 me-1 rounded-pill"
                type="button"
              >
                Rastreio Azul Cargo
              </button>
            </a>  
          </form>
        </nav>
      </div>
      <div className="d-flex justify-content-center">
        <h1 className="h1 text-warning">
          Rastrear Encomendas, por favor digite o número do pedido:
        </h1>
        <div className="card">
          <input
            type="email"
            className=" form-control "
            id="floatingInput"
            placeholder="Digite seu código de compra."
          />
          <button
            class="btn btn-outline-warning btn-lg fs-1 me-1 rounded-pill"
            type="button"
          >
            Rastrear encomenda/Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rastreio;
