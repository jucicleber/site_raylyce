import React from "react";
import catalogo from "../../hooks/catalogo.json";

const Produto = (props) => {
  return (
    <div className="container card m-3" style={{ width: 350, height: 350 }}>
      <h3>{props.produto.nome}</h3>
      <h3>{props.produto.price}</h3>
      <h3>{props.produto.quantidade}</h3>
    </div>
  );
};
//row
const Produtos = () => {
  return (
    <div className="justify-content-center row">
      {catalogo.produtos.map((prod) => (
        <Produto produto={prod} />
      ))}
    </div>
  );
};

export default Produtos;
