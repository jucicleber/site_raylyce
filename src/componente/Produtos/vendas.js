import React, { useState } from "react";
import appView from "../../AppView";




const Vendas = (props) => {
 const [numero, setNumero] = useState(appView.novoItem.qtd)
    function aumentar() {
        appView.novoItem.qtd += 1;
            setNumero(appView.novoItem.qtd)
        }
    function diminuir() {
        if (numero > 1) {
            appView.novoItem.qtd -= 1;
                setNumero(appView.novoItem.qtd)
        }
};

    return (
        <div className="card offset-3 col-6 justify-content-center ">
            <div className="d-flex justify-content-center">
                <div className="col-6 ">
                <img src={appView.novoItem.produto.imagem} className=" rounded float-left" width={200} alt="" />
                </div>
                <div className="col-6 ">
                <h1 className="card-title mb-5">{appView.novoItem.produto.nome}</h1> 
                <h1 className="card-title">{appView.novoItem.produto.price}</h1>
                </div>
            </div>  
            <div className="form-check offset-6 ">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    Correios
                </label>
            </div>
                <div class="form-check offset-6">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                <label class="form-check-label" for="flexCheckChecked">
                    Azul Cargo
                
                </label>
                <div class="form-check offset-6">
                        <button type="button" className="btn btn-secondary mt-5 mb-5">Calcular Frete</button>
                     </div>
            </div>
            <div className="offset-6 col-6 justify-content-center ">
                <h1 className="card-title mb-3">Valor do Frete: 10,00 R$</h1> 
                <h1 className="card-title mb-5">Valor Total: 14,90 R$</h1> 
            </div>
            <div className="offset-6 col-6 d-flex justify-content-center ">
                <h1 className="card-title mb-5">Quantidade: </h1> 
                <div className="col-4">
                    <div className="offset-4 d-flex align-items-center border border-3 rounded-pill">
                       
                <i className="bi bi-dash-lg fs-5 btn" onClick={() => diminuir()}></i>
                        <span id="numero">{numero}</span>
                <i className="bi bi-plus-lg fs-5 btn"onClick={() => aumentar()}></i>
                    </div>
                
                </div>
                
            </div>
            <div>
                <h1>{appView.novoItem.produto.description}</h1>
            </div>
            <div>
                <button type="button" class="btn btn-secondary btn-lg offset-5 mb-5 mt-5" onClick={() => appView.clickCarrinho(appView.novoItem)}>Adicionar ao Carrinho</button>
            </div>
            </div>
        
    );
};

export default Vendas;

