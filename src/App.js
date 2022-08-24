import React, { useState } from "react";
import Navbar from "../src/componente/Index_show_menu/index_show_menu";
import Carousel from "../src/componente/carrosel/carrosel";
import Footer from "../src/componente/footer/footer";
import Produtos from "./componente/Produtos/Produtos";
import Administrativo from "./componente/Administrativo/administrativo";
import Rastreio from "./componente/rastreio/rastreio";
import FaleConosco from "./componente/faleConosco/faleConosco";
import Pedido from "./componente/pedido/pedido";
import appView from "./AppView";
import Vendas from "./componente/Produtos/Vendas";
import PosVendas from "./componente/Produtos/PosVendas";
import FecharPedido from "./componente/Produtos/FecharPedido"  //chamando o componente FecharPedido
import Boleto from "./componente/Pagamentos/Boleto"


function App() {
  const [navigationCarrosel, setNavigationC] = useState(true);
  const [navigationProduto, setNavigationP] = useState(false);
  const [navigationAdmministrativo, setNavigationA] = useState(false);
  const [navigationRastreio, setNavigationR] = useState(false);
  const [navigationFaleConosco, setNavigationF] = useState(false);
  const [navigationPedido, setNavigationPE] = useState(false);
  const [AdicionarVenda, setAdicionarVenda] = useState(false);
  const [navPosVendas, setNavPosVendas] = useState(false);
  const [navFecharPedido, setNavFecharPedido] = useState(false); //Inicaindo estado como falso FecharPedido
  const [navBoleto, setNavBoleto] = useState(false);

  let limparTela = () => {
    setNavigationC(false);
    setNavigationP(false);
    setNavigationA(false);
    setNavigationR(false);
    setNavigationF(false);
    setNavigationPE(false);
    setAdicionarVenda(false);
    setNavPosVendas(false);
    setNavFecharPedido(false) //Trazendo como flso em limpar tela.
    setNavBoleto(false)
  }

  appView.Boleto = () => {
    limparTela()
    setNavBoleto(true)
}

  appView.fecharPedido = () => { //Chamando FecharPedido e limpando a tela
    limparTela()
    setNavFecharPedido(true)
}

  appView.calcularTotal = () => {
      let total = 0
      appView.carrinho.forEach(item => {
          total += item.produto.price * item.qtd
      });
      return total;
  }
  
  appView.clickProduto = (produto) => {
    appView.novoItem = { produto, qtd: 1 };
    limparTela();
    setAdicionarVenda(true);
  };
  appView.clickCarrinho = (item) => {
    if (!appView.carrinho) {
      appView.carrinho = [];
    }
    appView.carrinho.push(item);
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
      {navFecharPedido && <FecharPedido />} 
      {navBoleto && <Boleto />}
      <Footer />
    </div>
  );
}

export default App;
