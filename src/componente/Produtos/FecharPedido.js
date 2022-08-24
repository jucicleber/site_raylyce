import React from "react";
import appView from "../../AppView";

// function CalculoFrete() {
//     let total = 0
//     frete = 15 //frete da cidade de Várzea Grande-MT
//     let produto = calcularTotal()
//     total += frete + produto
//     return (
//         total
//     )
// }

function FecharPedido() {
    return (
    <div>
        <div className="card offset-3 col-6 container d-flex text-right">
            <h3>Total item(ns)({appView.carrinho.length} item(ns))</h3>
            <h3>Valor do(s) produto(s): {appView.calcularTotal().toFixed(2)} R$</h3>
        </div>
        <div className="card offset-3 col-6 container d-flex ">
           
                <h1 className="mb-5 mt-5">Entrega</h1>
                <h3 className="mb-5">De acordo com sua localização cadastrada o melhor frete é via:</h3>  
                <h4 className="mb-5">Correios ou Motoboy</h4>
                <h2 className="mb-5">Endereço de Entrega Cadastrado:</h2>
                <h5 className="">Rua São Luiz 13, Centro-Sul,</h5>
                <h5 className="mb-5"> Várzea Grande, Mato Grosso, 78130334.</h5>
                <div className="d-flex">
                    <div className="col-8">
                    <h2 >Valor do Frete:</h2> 
                    </div>
                    <div className="col-4" >
                    <h2 className="mb-5" id="frete">15.00 R$</h2> 
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-8">
                         <h2 >Valor do(s) produto(s):</h2>
                    </div>
                   <div className="col-4 mb-5">
                         <h2 className="">{appView.calcularTotal().toFixed(2)} R$</h2>
                   </div>
                </div>
                <div className="d-flex">
                    <div className="col-8">
                         <h2>Valor Total(Frete/Produto):</h2>
                    </div>
                   <div className="col-4">
                        <h2 className="mb-5">50.00 R$</h2>
                   </div> 
                </div>
                 
                 </div>
         <div className="card offset-3 col-6 container">
           
                <h1 className="mb-5 mt-5">Pagamento</h1>
                <div className="d-flex">
                    <div className="col-4">
                        <h3 className="mb-3">Cartão de Crédito</h3>
                    </div>
                    <div className="offset-4">
                         <button className="btn btn-outline-warning fs-1 me-1 rounded-pill mb-3"  onClick={() => appView.CartaoCredito()}>Cartão de Crédito</button>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-4">
                        <h3 className="mb-3">Cartão de Débito</h3>
                    </div>
                    <div className="offset-4">
                         <button className="btn btn-outline-primary fs-1 me-1 rounded-pill mb-3">Cartão de Débito</button>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-4">
                        <h3 className="mb-3">Boleto</h3>
                    </div>
                    <div className="offset-4">
                        <button className="btn btn-outline-info fs-1 me-1 rounded-pill mb-5" onClick={() => appView.Boleto()}>Gerar Boleto</button>
                    </div>
                </div>
            </div>
        </div>
   
    )
}

export default FecharPedido;