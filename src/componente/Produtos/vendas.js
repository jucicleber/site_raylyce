import React, { useState } from "react";
import appView from "../../AppView";



const Vendas = (props) => {
    const [AdicionarVenda, setAdicionarVenda] = useState(true)

    return (
        <div className="card offset-3 col-6 justify-content-center ">
            <div className="d-flex justify-content-center">
                <div className="col-6 ">
                <img src={appView.produto.imagem} className=" rounded float-left" width={200} alt="" />
                </div>
                <div className="col-6 ">
                <h1 className="card-title">{appView.produto.nome}</h1> 
                <h1 className="card-title">{appView.produto.price}</h1>
                </div>
            </div>  
            <div class="form-check offset-6">
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
                        <button type="button" class="btn btn-secondary">Secondary</button>
                     </div>
                 </div>
            </div>
        
    );
};

export default Vendas;

