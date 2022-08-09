import React, { useState } from "react";
import appView from "../../AppView";




const Vendas = (props) => {
   

 const [numero, setNumero] = useState(0)
        function aumentar() {
            setNumero((prevState) => prevState + 1)
        }
    function diminuir() {
        if (numero > 0) {
            setNumero((prevState) => prevState - 1)
        }
};

    return (
        <div className="card offset-3 col-6 justify-content-center ">
            <div className="d-flex justify-content-center">
                <div className="col-6 ">
                <img src={appView.produto.imagem} className=" rounded float-left" width={200} alt="" />
                </div>
                <div className="col-6 ">
                <h1 className="card-title mb-5">{appView.produto.nome}</h1> 
                <h1 className="card-title">{appView.produto.price}</h1>
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
                       
                <i className="bi bi-dash-lg fs-5 btn" onClick={diminuir}></i>
                        <span id="numero">{numero}</span>
                <i className="bi bi-plus-lg fs-5 btn"onClick={aumentar}></i>
                    </div>
                
                </div>
                
            </div>
            <div>
                <h1 className="card-title">Descrição: O produto mede 4cm quadrado, é feito de acrilico e sera embalado para não haver danos.</h1>
            </div>
            <div>
                <button type="button" class="btn btn-secondary btn-lg offset-5 mb-5 mt-5" onClick={() => appView.clickCarrinho(props.carrinho)}>Adicionar ao Carrinho</button>
            </div>
            </div>
        
    );
};

export default Vendas;

