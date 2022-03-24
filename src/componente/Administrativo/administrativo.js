import React, { useState } from "react";
import RegisterProduct from "./registerProduct";

const Administrativo = (props) => {
  const [administrativo, setAdminstrativo] = useState(true);
  return (
    <>
      {administrativo ? (
        <form
          form
          className=" text-center col-6 justify-content-center align-items-center"
        >
          <h3 className="mb-3 fw-normal">Login</h3>
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control mt-5"
              id="floatingInput"
              placeholder="name@example.com"
              value="a"
            />
            <label for="floatingInput">Login Administrativo</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control mt-5"
              id="floatingPassword"
              placeholder="Password"
              value="a"
            />
            <label for="floatingPassword">Senha</label>
          </div>

          <div className="checkbox mb-3"></div>
          <button
            className="btn btn-lg btn-outline-primary me-5 px-5"
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
