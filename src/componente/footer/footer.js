import React from "react";
import "../app.css";

const Footer = () => {
  return (
    <>
      <hr />
      <div class=" ">
        <div>
          <div class="row g-0">
            <div
              class="col-6 text-center border border-primary border-bottom "
              id="column1"
            >
              <h1>Fale Conosco</h1>
              <h4 className="text-footer-contact">(065) 99693-7009</h4>
              <h4 className="text-footer-contact">(065) 99316-7473</h4>
              <br />
              <h4 className="text-footer-contact">
                raylyceacessorios@hotmail.com
              </h4>
              <br />
              <h4 className="text-footer-contact">
                Atendimento nos telefones e email de Segunda a Sexta das 9h até
                as 18h.
              </h4>
            </div>
            <div class="col-6 text-center border border-primary" id="column2">
              <h1>Pagamentos</h1>
              <div className="">
                <span className="text-left text-footer-payment" id="pix">
                  Pix /
                </span>
                <span className="text-left text-footer-payment" id="boleto">
                  Boleto /
                </span>
                <span className="text-left text-footer-payment" id="debito">
                  Cartão de Debito /
                </span>
                <span className="text-left text-footer-payment" id="credito">
                  Cartão de Crédito
                </span>
              </div>
            </div>
          </div>
          <div id="razao-footer" class="text-center ">
            <h2>
              CNPJ: 40.439.083/0001-34 Razão social: Raylyce Recortes a Laser
            </h2>
            <h2>Desenvolvido por: Creber tecnologia</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

//sign
//
