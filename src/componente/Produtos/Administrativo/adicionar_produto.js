import React from "react";

const AdicionarProduto = () => {
  return (
    <div className="card col-12">
      <h1 className="mb-5">Inserir Produto!</h1>
      <h3 className="fs-1">Digite o nome do Produto.</h3>
      <input
        className="input-group-text mb-5"
        placeholder="Digite o nome do produto."
      ></input>
      <h3 className="fs-1">Digite o valor do Produto.</h3>
      <input
        className="input-group-text mb-5"
        placeholder="Digite o valor do produto."
      ></input>
      <h3 className="fs-1">Digite o quantidade do produto.</h3>
      <input
        type="tel"
        className="input-group-text mb-5"
        placeholder="Digite a quantidade em estoque hoje."
      ></input>
      <h3 className="fs-1 mb-5">No botão "Escolher arquivo carregue a imagem do produto."</h3>
      <input
        type="file"
        className="myFile mb-5" 
      ></input>
      <button
        className="col-6 offset-3 btn btn-outline-primary me-5 px-5 mb-5 mt-5"
        align="center"
        type="button"
      >
        Adicionar
      </button>
    </div>
  );
};

export default AdicionarProduto;
