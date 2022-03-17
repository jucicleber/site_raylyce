import React from "react";
import "../app.css";

const Footer = () => {
  return (
    <footer>
      <div className=" row g-0 row-cols-2 py-5 my-5 border-top">
        <div className="col text-center">
          <h1 className="text-muted">Fale Conosco</h1>
          <h3 className="col text-left">(065) 99693-7009</h3>
          <h3 className="col text-left">(065) 99316-7473</h3>
          <h3 className="col text-left mt-5">raylyceacessorios@hotmail.com</h3>
          <h4 className="col text-left mt-5">
            Atendimento nos telefones e email de Segunda a Sexta das 9h até as
            18h.
          </h4>
        </div>
        <div className="col text-center">
          <h1 className="text-muted">Pagamentos</h1>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 ">
              <h3 className="col text-left">Pix</h3>
              <h3 className="col text-left mt-4">Boleto</h3>
              <h3 className="col text-left mt-4">Cartão de Crédito</h3>
              <h3 className="col text-left mt-4">Cartão de Débito</h3>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">
        <h4>CNPJ: 40.439.083/0001-34 Razão social: Raylyce Recortes a Laser</h4>
        <h4>Desenvolvido por: Creber tecnologia</h4>
      </div>
    </footer>
  );
};

export default Footer;
