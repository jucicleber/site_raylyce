import React, {useState} from "react";
import appView from "../../AppView";
import Vendas from "./vendas";



const PosVendas = () => {
    
const [numero, setNumero] = useState(appView.novoItem.qtd)
    function aumentar() {
        appView.novoItem.qtd += 1;
            setNumero(appView.novoItem.qtd)
        }
    function diminuir() {
        if (numero > 0) {
            appView.novoItem.qtd -= 1;
            setNumero(appView.novoItem.qtd)
        }
};


    return (
        <div className="card offset-3 col-6 justify-content-center container">
            <div className="d-flex justify-content-start">
               <input className="form-check-input" type="checkbox" value="" /> 
                 <label class="form-check-label" for="flexCheckChecked"> </label> 
                <h1 className="offset-1 ">Marcar todos</h1>    
            </div>
            <div className="d-flex justify-content-evenly align-items-center">
                <button type="button" class="btn btn-secondary btn-lg offset-5 mb-5 mt-5 mr-2">Fechar Pedido</button>
                <h3 >Total (1 item(ns)): R$ 200,00</h3>
        </div> 
        <hr />   
        <div className="d-flex justify-content-center">
                <div className="col-6">   
                     <input className="form-check-input ml-5" type="checkbox" value="" />         
                    <img src={appView.novoItem.produto.imagem} className=" rounded float-left" width={100} alt="" />  
                 <div className="col-4 offset-md-5 d-flex align-items-center justify-content-center border border-1 rounded-pill">
                    <i className="bi bi-dash-lg fs-5 btn" onClick={diminuir}></i>
                    <span id="numero">{numero}</span>
                    <i className="bi bi-plus-lg fs-5 btn" onClick={aumentar}></i>
                    </div>
                    
            </div> 
        <div className="col-6">
            <h1 className="card-title mb-5">{appView.novoItem.produto.nome}</h1> 
            <h2 className="card-title mb-3">Valor item: {appView.novoItem.produto.price}</h2>
                    <h2 className="card-title">Valor do frete: 10.90 R$</h2>
                    <button type="button" className="btn btn-secondary btn-lg offset-5 mb-5 mt-5 mr-2">Apagar item</button>
        </div> 
        </div>       
    <hr />         
         
            
    
</div>
    )


}

export default PosVendas;