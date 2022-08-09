import React, { useState } from "react";
import Navbar from "../src/componente/Index_show_menu/index_show_menu";
import Carousel from "../src/componente/carrosel/carrosel";
import Footer from "../src/componente/footer/footer";
import Produtos from "./componente/Produtos/produtos";
import Administrativo from "./componente/Administrativo/administrativo";
import Rastreio from "./componente/rastreio/rastreio";
import FaleConosco from "./componente/faleConosco/faleConosco";
import Pedido from "./componente/pedido/pedido";
import appView from "./AppView";
import Vendas from "./componente/Produtos/vendas";
import PosVendas from "./componente/Produtos/PosVendas";


function App() {
  const [navigationCarrosel, setNavigationC] = useState(true);
  const [navigationProduto, setNavigationP] = useState(false);
  const [navigationAdmministrativo, setNavigationA] = useState(false);
  const [navigationRastreio, setNavigationR] = useState(false);
  const [navigationFaleConosco, setNavigationF] = useState(false);
  const [navigationPedido, setNavigationPE] = useState(false);
  const [AdicionarVenda, setAdicionarVenda] = useState(false);
  const [navPosVendas, setNavPosVendas] = useState(false);

  let limparTela = () => {
    setNavigationC(false);
    setNavigationP(false);
    setNavigationA(false);
    setNavigationR(false);
    setNavigationF(false);
    setNavigationPE(false);
    setAdicionarVenda(false);
    setNavPosVendas(false);
  }

  appView.clickProduto = (produto) => {
    appView.produto = produto;
    limparTela();
    setAdicionarVenda(true);
  };
  appView.clickCarrinho = (carrinho) => {
    appView.carrinho = carrinho;
    limparTela();
    setNavPosVendas(true);
  };

  return (
    <div>
      <Navbar
        navigationCarrosel={setNavigationC}
        navigationProduto={setNavigationP}
        navigationAdmministrativo={setNavigationA}
        navigationRastreio={setNavigationR}
        navigationFaleConosco={setNavigationF}
        navigationPedido={setNavigationPE}
      />
      {navigationCarrosel && (<Carousel />)}
      {navigationProduto && (<Produtos />)}
      {AdicionarVenda && (<Vendas />)}
      {navPosVendas && (<PosVendas />)}
      {navigationAdmministrativo && (
        <div className="card d-flex align-items-center justify-content-center">
          <Administrativo />
        </div>
      )}
      {navigationRastreio && <Rastreio />}
      {navigationFaleConosco && <FaleConosco />}
      {navigationPedido && <Pedido />}
      <Footer />
    </div>
  );
}

export default App;
