import React from "react";


const Pedido = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="mb-5 text-success">Pedido!</h1>
        <h3>
          Digite o que deseja encomendar para que um de nossos atendentes entre
          em contato com voce.
        </h3>
        <div className="form-floating ">
          <textarea
            placeholder="Descreva aqui seu pedido."
            id="floatingTextarea2"
            className="col-8 form-control"
          ></textarea>
        </div>
        <h3>Quantidade</h3>
        <div class="">
          <input
            type="email"
            className=" form-control "
            id="floatingInput"
            placeholder="Digite seu Email."
          />
        </div>   
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
        <div className="d-flex justify-content-center">
          <button
            className=" mt-5 mb-5 px-5 btn btn-lg btn-outline-success "
            type="submit"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Pedido;
