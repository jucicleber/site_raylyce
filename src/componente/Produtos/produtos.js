import React from "react";
import catalogo from "../../hooks/catalogo.json";

const Produto = (props) => {
  let imagem = props.produto.imagem;
  console.log(imagem);
  return (
    <div className="card p-4 m-2" id="cardProduto">
      <img
        src={props.produto.imagem}
        className="card-img-top"
        alt="imagem do produto"
      />
      <div className="card-body">
        <h2 className="card-title">{props.produto.nome}</h2>
        <p className="card-text">
          <h2> {props.produto.price}</h2>
        </p>
      </div>
    </div>
  );
};
const Produtos = () => {
  return (
    <div className="row g-0 justify-content-center aligin-items-center">
      {catalogo.produtos.map((prod) => (
        <Produto produto={prod} />
      ))}
    </div>
  );
};

export default Produtos;
