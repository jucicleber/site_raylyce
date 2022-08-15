import React from "react";
import appView from "../../AppView";
import catalogo from "../../hooks/catalogo.json";

const Produto = (props) => {
  let imagem = props.produto.imagem;

  console.log(imagem);
  return (
    
    <div className="card g-5 m-3" id="cardProduto" onClick={() => appView.clickProduto(props.produto)}>
      
      <img
        src={props.produto.imagem}
        className="card-img-top"
        alt="imagem do produto"
      />
      <div className="card-body">
        <h2 className="card-title">{props.produto.nome}</h2>
        <p className="card-text">
          <h2> {props.produto.price}0 R$ A unidade</h2>
        </p>
      </div>
      </div>
  );
};
const Produtos = (props) => {
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
        <div className="row">
          
           <button
            className="btn btn-primary btn-lg col-md-3 offset-md-4 mt-5"
            type="submit"
          >
            Pesquisar
          </button>
        </div>
       
        {catalogo.produtos.map((prod) => (
          <Produto produto={prod} />
        ))}
      </div>
      </div>
  
  );
};

export default Produtos;
