import React from "react";

const Pedido = () => {
  return (
    <div>
      <div className="card">
        <h1 className="mb-5">Pedido!</h1>
        <h3>
          Digite o que deseja encomendar para que um de nossos atendentes entre
          em contato com voce.
        </h3>
        <div className="form-floating">
          <textarea
            placeholder="Descreva aqui seu pedido."
            id="floatingTextarea2"
            className="col-8 "
          ></textarea>
        </div>
        <h3>Digite seu Email para entrarmos em contato.</h3>
        <div class="form-floating mb-3">
          <input
            type="email"
            className=" col-3"
            id="floatingInput"
            placeholder="Digite seu Email."
          />
        </div>
        <h3>Digite seu número de telefone.</h3>
        <input
          type="phone"
          className="col-3"
          placeholder="Digite seu número de telefone."
        ></input>
        <h3>
          Desejar carregar alguma imagem para ilustrar seu pedido se sim abra
          aqui.
        </h3>
        <input
          type="file"
          name="arquivos"
          class="btn btn"
          accept="image/png, image/jpeg"
          multiple
        />
      </div>
    </div>
  );
};

export default Pedido;
