import React from "react";

const Rastreio = () => {
  return (
    <div className="container ng-0">
      <div className="card">
        <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
            <a href="https://www.carvalima.com.br/rastreamento">
              <button
                class="btn btn-outline-warning btn-lg fs-1 me-1 rounded-pill"
                type="button"
              >
                Rastreio Carvalima Transportes
              </button>
            </a>
            <a href="https://www.braspress.com/rastreie-sua-encomenda/">
              <button
                class="btn btn-outline-warning btn-lg fs-1 me-1 rounded-pill"
                type="button"
              >
                Rastreio Brasspress Transportes
              </button>
            </a>
            <a href="https://rastreamento.correios.com.br/app/index.php">
              <button
                class="btn btn-outline-warning btn-lg fs-1 me-1 rounded-pill"
                type="button"
              >
                Rastreio Correios Transportes
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
            Rastreio encomenda
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rastreio;
