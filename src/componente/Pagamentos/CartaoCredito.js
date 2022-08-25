import React from "react"
import InputMask from "react-input-mask";


function CartaoCredito() {
    return (
    <div className="card col-6 container">
         <h1 className="mb-5 text-center">Cartão de Credito</h1> 
            <h2 className="mb-5">Digite o número do seu cartão:</h2>
          <InputMask
          mask="9999-9999-9999-9999"
          type="text"
          placeholder="Digite seu número do cartão."
          className="input-group-text mb-5 rounded-pill  fs-1 me-1"
        />
            <h2 className="mb-5">Digite o número do CVV do seu Cartão:</h2>
             <input
        type=""
        className="input-group-text mb-5 rounded-pill  fs-1 me-1"
        placeholder="Digite o número do CVV do seu cartão."
      ></input>
            <h2 className="mb-5">Data de Expiração:</h2>
             <input
        type="Date"
        className="input-group-text mb-5 rounded-pill  fs-1 me-1"
        placeholder="Digite o número do CVV do seu cartão."
      ></input>
            <h2 className="">Instituição Financeira:</h2>
             <input
        type=""
        className="input-group-text mb-5 rounded-pill  fs-1 me-1"
        placeholder="O nome da instituição vem automaticamente."
      ></input>
        <div className="justify-content-center d-flex">
          <button className="btn btn-outline-info fs-1 me-1 rounded-pill mb-5 col-4">Fazer o Pagamento</button>
        </div>
        
    </div>
)
}

export default CartaoCredito;