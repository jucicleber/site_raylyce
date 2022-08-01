import React from "react";
import catalogo from "../../hooks/catalogo.json";

const Produto = (props) => {
  let imagem = props.produto.imagem;
  console.log(imagem);
  return (
    
    <div className="card g-5 m-3" id="cardProduto">
      
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
  <div className="">
      
  </div>
  return (
    <div className="d-flex justify-content-center aligin-items-center">
      <div className="row col-9">
         <input
              type="search"
              className="form-control"
              placeholder="Procurar Produto"
              aria-label="Search"
    ></input>
        {catalogo.produtos.map((prod) => (
          <Produto produto={prod} />
        ))}
      </div>
      </div>
  
  );
};

export default Produtos;
