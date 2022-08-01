import React, { useState } from "react";
import RegisterProduct from "./registerProduct";


//Aqui em administrativo a senha é somente "a" em login e clica no botão (enviar).
const Administrativo = (props) => {
  const [administrativo, setAdminstrativo] = useState(true);
  return (
    <>
      {administrativo ? (
        <form
          form
          className=" text-center col-6 justify-content-center align-items-center"
        >
          <h1 className="mb-3 fw-normal text-danger fs-1">Login</h1>
          <div className="form-floating mb-2">
            <input
              type="email"
              className=" form-control "
              id="floatingInput"
              placeholder="Digite seu código de compra."
            />
            <label for="text-danger">Login Administrativo</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className=" form-control "
              id="floatingInput"
              placeholder="Digite seu código de compra."
            />
            <label for="floatingPassword">Senha</label>
          </div>

          <div className="checkbox mb-3"></div>
          <button
            className="btn btn-lg btn-outline-danger me-5 px-5"
            type="submit"
            onClick={() => {
              setAdminstrativo(false);
            }}
          >
            Enviar
          </button>
        </form>
      ) : (
        <RegisterProduct />
      )}
    </>
  );
};

export default Administrativo;
