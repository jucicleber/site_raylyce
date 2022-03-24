import React from "react";

const RegisterProduct = () => {
  return (
    <div>
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">
            O que voce deseja fazer, caro(a) administrados.
          </h3>

          <p class="card-text">
            <h4>
              Aqui voce pode Inserir um Produto no Estoque, Editar um produto já
              existente no Estoque e ainda Excluir alguma produto que possa ter
              deixado de fabricar.
            </h4>
          </p>
          <button className="mt-3 mb-3 mp-3 btn btn-outline-primary fs-1 me-1 rounded-pill">
            Inserir Produto
          </button>
          <input
            type="search"
            class="form-control"
            placeholder="Procurar Produto."
            aria-label="Search"
          ></input>
        </div>
      </div>
    </div>
  );
};
//   {
//     inserir && (
//       <button
//         onClick={() => {
//           setInserir(true);
//           setEditar(false);
//           setExcluir(false);
//         }}
//       >
//         Inserir
//       </button>
//     );
//   }
//   {
//     editar && (
//       <button
//         onClick={() => {
//           setInserir(false);
//           setEditar(true);
//           setExcluir(false);
//         }}
//       >
//         Editar
//       </button>
//     );
//   }
//   {
//     excluir && (
//       <button
//         onClick={() => {
//           setInserir(false);
//           setEditar(false);
//           setExcluir(true);
//         }}
//       >
//         excluir
//       </button>
//     );
//   }
// };

export default RegisterProduct;
