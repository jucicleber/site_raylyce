import React, {useState} from "react";
import appView from "../../AppView";
import ItemCarrinho from "./ItemCarrinho";




const PosVendas = () => {
    const [totalItens, setTotalItens] = useState(appView.calcularTotal());

    appView.atualizarTotal = () => {
        setTotalItens(appView.calcularTotal());
    }
    
    return (
        <div className="card offset-3 col-6 justify-content-center container" >
            <div className="d-flex justify-content-start">
               <input className="form-check-input" type="checkbox" value="" /> 
                 <label class="form-check-label" for="flexCheckChecked"> </label> 
                <h1 className="offset-1 ">Marcar todos</h1>    
            </div>
            <div className="d-flex justify-content-evenly align-items-center">
                <button type="button" class="btn btn-secondary btn-lg offset-5 mb-5 mt-5 mr-2" onClick={() => appView.fecharPedido()}>Fechar Pedido</button>
            </div> 
            <h3 className="text-right">Total ({appView.carrinho.length} item(ns))</h3>
                  <h3 className="text-right">Valor Total: {totalItens.toFixed(2)} R$.</h3>
            <hr/>  
            {appView.carrinho.map((item, key) => (<ItemCarrinho key={key} item={item}></ItemCarrinho>))} 
            <h3 className="text-right">Total ({appView.carrinho.length} item(ns))</h3>
            <h3 className="text-right">Valor Total: {totalItens.toFixed(2)} R$.</h3>
         
            
    
</div>
    )


}

export default PosVendas;