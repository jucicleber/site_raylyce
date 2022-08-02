import React, { useState } from "react";
import AdicionarProduto from "./adicionar_produto";

const RegisterProduct = (props) => {
  const [adicionarProduto, setAdicionarProduto] = useState(true);
  return (
    <div>
      {adicionarProduto ? (
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">
              O que voce deseja fazer, caro(a) administrador.
            </h3>

            <p class="card-text">
              <h4>
                Aqui voce pode Inserir ou adicionar novamente um produto no estoque da empresa.
              </h4>
            </p>
            <button
              onClick={() => setAdicionarProduto(false)}
              className="mt-3 mb-3 mp-3 btn btn-outline-primary fs-1 me-1 rounded-pill"
            >
              Inserir Produto
            </button>

           
        </div>
          </div>
       
      ) : (
        <AdicionarProduto />
      )}
    </div>
  );
};


export default RegisterProduct;
