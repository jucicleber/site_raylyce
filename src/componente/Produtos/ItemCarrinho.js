import {React, useState} from "react";
import appView from "../../AppView";

function ItemCarrinho(props) {
     let item = props.item;
    

    
    const [numero, setNumero] = useState(item.qtd)
        function aumentar() {
            item.qtd += 1;
            setNumero(item.qtd)
            appView.atualizarTotal()
            }
        function diminuir() {
            if (numero > 1) {
                item.qtd -= 1;
                setNumero(item.qtd)
                appView.atualizarTotal()
            }
    };
    return (
        <div className="d-flex justify-content-center">
            <div className="col-6">   
                    <input className="form-check-input ml-5" type="checkbox" value="" />         
                <img src={item.produto.imagem} className=" rounded float-left" width={100} alt="" />  
                <div className="col-4 offset-md-5 d-flex align-items-center justify-content-center border border-1 rounded-pill">
                <i className="bi bi-dash-lg fs-5 btn" onClick={diminuir}></i>
                <span id="numero">{numero}</span>
                <i className="bi bi-plus-lg fs-5 btn" onClick={aumentar}></i>
                </div>
                
        </div> 
    <div className="col-6">
        <h1 className="card-title mb-5">{item.produto.nome}</h1> 
        <h2 className="card-title mb-3">Valor item: {item.produto.price.toFixed(2)} R$ a unidade</h2>
            <button type="button" className="btn btn-secondary btn-lg offset-5 mb-5 mt-5 mr-2">Apagar item</button>
            <hr />  
        </div> 
          
    </div>
        
)}


export default ItemCarrinho