import React, { useState } from "react";
import appView from "../../AppView";
import ItemCarrinho from "../Produtos/ItemCarrinho"


function FecharPedido() {

       
    return (
        <div className="card offset-3 col-6 justify-content-center ">
            <div className="container d-flex justify-content-center">
                <h3 >Total item(ns) {appView.carrinho.length} no carrinho</h3>
                <h3>Valor total: {appView.calcularTotal()}</h3>
                <hr/>
                <h1>Entrega</h1>
                <h3>De acordo com sua localização cadastrada o melhor frete é via:</h3>  
                <h4>Correios ou Motoboy</h4>
                <h4>Endereço de entrega cadastrado:</h4>
                <h3>Rua São Luiz 13, Centro-Sul, Várzea Grande, Mato Grosso, 78130334.</h3>
                <h3>Valor do frete:</h3>
                 </div>
        
         <div className="card offset-3 col-6 justify-content-center ">
            <div className="container d-flex justify-content-center">
                <h1>Pagamento</h1>
                <h3>Cartão de Crédito</h3>
                <h3>Cartão de Débito</h3>
                <h3>Boleto</h3>
            </div>
        </div>
    </div>
    )
}

export default FecharPedido;