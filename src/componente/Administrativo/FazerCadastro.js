import React from "react";

function FazerCadastro () {
    return (
        <div className="card col-6 container d-flex"> 
            <h1 className="mb-5">Cadastro de Cliente</h1>
            <h3>Nome</h3>
             <input
                className="input-group-text mb-5"
                placeholder="Digite seu Nome."></input>
            <h3>Email</h3>
             <input
                className="input-group-text mb-5"
                placeholder="Digite seu Email."></input>
            <h3>CPF</h3>
             <input
                className="input-group-text mb-5"
                placeholder="Digite seu CPF."></input>
            <h3>Telefone/WhatsApp</h3>
            <input
                className="input-group-text mb-5"
                placeholder="Digite seu telefone"></input>
            <h3>CEP</h3>
            <input
                className="input-group-text mb-5"
                placeholder="Digite seu CEP"></input>
            <h3>Rua</h3>
             <input
                className="input-group-text mb-5"
                placeholder="Digite sua rua"></input>
            <h3>Número da Casa</h3>
             <input
                className="input-group-text mb-5"
                placeholder="Digite o número da sua casa."></input>
            <h3>Cidade</h3>
             <input
                className="input-group-text mb-5"
                placeholder="Digite o nome da sua Cidade"></input>
            <h3>Complemento</h3>
             <input
                className="input-group-text mb-5"
                placeholder="Ex: quadra, apt, etc."></input>
            <button
        className="col-6 offset-3 btn btn-outline-primary me-5 px-5 mb-5 mt-5"
        align="center"
        type="button"
      >
        Enviar
      </button>
        </div>
    )
}

export default FazerCadastro;