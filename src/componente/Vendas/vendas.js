import React from "react"
import { catalogo } from "../../hooks/catalogo.json";


const Vendas () => {
    return (
        <div className="container">
            <div className="card">
                <nav className="navbar navbar-light bg-light">
                    <ul>
                        <produtos nome={nome[0]} price={catalogo[1]}>
                    </ul>
                </nav>

           </div>
        </div>
    )
}