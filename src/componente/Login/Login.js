import React, { useState } from "react";
import appView from "../../AppView";
import BoasVindas from "./BoasVindas";

const Login = (props) => {
  const [login, setLogin] = useState(true);
  return (
    <>
      {login ? (
        <form
          form
          className=" text-center col-6 justify-content-center align-items-center"
        >
          <h1 className="mb-5 fw-normal text-danger fs-1">Login</h1>
          <div className="form-floating mb-2">
            <input
              type="email"
              className=" form-control "
              id="floatingInput"
              placeholder="Digite seu código de compra."
            />
            <label for="text-danger">Login </label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className=" form-control mb-5"
              id="floatingInput"
              placeholder="Digite seu código de compra."
            />
            <label for="floatingPassword">Senha</label>
          </div>

          <div className="checkbox mb-3"></div>
          <button
            className="offset-1 btn btn-lg btn-outline-danger me-5 px-5 mb-5"
            type="submit"
            onClick={() => {
              setLogin(false);
              
            }}
          >
            Enviar
          </button>
         <button type="submit" className="offset-6 btn btn-lg btn-outline-success me-5 px-5 mb-5" onClick={() => appView.FazerCadastro()}>Fazer Cadastro</button>
        </form>
      ) : (
          <BoasVindas />
         
      )}
      
    </>
  );
};

export default Login;


