import React from "react"
import appView from "../../AppView"


function Boleto() {
    return (
        <div className="card col-6 container">
            <h1 className="mb-5 text-center">Geração de Boleto</h1> 
            <h2 className="mb-5"> Valor dos Produto(s) comprado(s).{appView.calcularTotal().toFixed(2)} R$</h2>
            <h2 className="mb-5">Valor Frete: 50.00 R$</h2>
            <h2 className="mb-5">Valor Total(Frete/Produto): 50.00 R$</h2>
            <div className="justify-content-center d-flex">
                 <button className="btn btn-outline-info fs-1 me-1 rounded-pill mb-5 col-4 ">Dawnload do Boleto</button>
            </div>
          
        </div>
    )
}

export default Boleto;