import React from "react";

const Rastreio = () => {
  return (
    <div className="container">
      <div className="card">
        <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
            <h1 className="btn-outline-warning ">Rastreio:</h1>
            <h1 className="btn-outline-warning">Voce deseja rastrear um Pedido ou Encomenda enviado pro qual meio de transporte:</h1>
            <a href="https://rastreamento.correios.com.br/app/index.php">
              <button
                className="btn btn-outline-warning btn-lg fs-1 me-1 mt-5  rounded-pill"
                type="button"
              >
                Rastreio Correios
              </button>
            </a>
            <a href="https://www.azulcargoexpress.com.br/Rastreio/Rastreio">
              <button
                class="btn btn-outline-warning btn-lg fs-1 me-1 mt-5  rounded-pill"
                type="button"
              >
                Rastreio Azul Cargo
              </button>
            </a>  
          </form>
        </nav>
      </div>
      <div className="d-flex justify-content-center">
        </div>
      </div>
  );
};

export default Rastreio;
