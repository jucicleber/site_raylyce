import React, { useState } from "react";
import Navbar from "../src/componente/Index_show_menu/index_show_menu";
import Carousel from "../src/componente/carrosel/carrosel";
import Footer from "../src/componente/footer/footer";
import Produtos from "./componente/Produtos/Cliente/Produtos";
import Login from "./componente/Login/Login";
import FazerCadastro from "./componente/Login/FazerCadastro";
import Rastreio from "./componente/rastreio/rastreio";
import FaleConosco from "./componente/faleConosco/faleConosco";
import Pedido from "./componente/pedido/pedido";
import appView from "./AppView";
import Vendas from "./componente/Produtos/Cliente/Vendas";
import PosVendas from "./componente/Produtos/Cliente/PosVendas";
import FecharPedido from "./componente/Produtos/Cliente/FecharPedido"; //chamando o componente FecharPedido
import Boleto from "./componente/Pagamentos/Boleto";
import CartaoCredito from "./componente/Pagamentos/CartaoCredito";
import CartaoDebito from "./componente/Pagamentos/CartaoDebito";



function App() {
  const [navigationCarrosel, setNavigationC] = useState(true);
  const [navigationProduto, setNavigationP] = useState(false);
  const [navigationLogin, setNavLoginL] = useState(false);
  const [navigationRastreio, setNavigationR] = useState(false);
  const [navigationFaleConosco, setNavigationF] = useState(false);
  const [navigationPedido, setNavigationPE] = useState(false);
  const [AdicionarVenda, setAdicionarVenda] = useState(false);
  const [navPosVendas, setNavPosVendas] = useState(false);
  const [navFecharPedido, setNavFecharPedido] = useState(false); //Inicaindo estado como falso FecharPedido
  const [navBoleto, setNavBoleto] = useState(false);
  const [navCartaoCredito, setNavCartaoCredito] = useState(false);
  const [navCartaoDebito, setNavCartaoDebito] = useState(false)
  const [navFazerCadastro, setNavFazerCadastro] = useState(false)


  //Caminho para compra de produto
  let limparTela = () => {
    setNavigationC(false);
    setNavigationP(false);
    setNavLoginL(false);
    setNavigationR(false);
    setNavigationF(false);
    setNavigationPE(false);
    setAdicionarVenda(false);
    setNavPosVendas(false);
    setNavFecharPedido(false) //Trazendo como flso em limpar tela.
    setNavBoleto(false)
    setNavCartaoCredito(false)
    setNavCartaoDebito(false)
    setNavFazerCadastro(false)
  }
  appView.FazerCadastro = () => {
    limparTela()
    setNavFazerCadastro(true)
  }
  appView.CartaoDebito = () => {
    limparTela()
    setNavCartaoDebito(true)
}

  appView.CartaoCredito = () => {
    limparTela()
    setNavCartaoCredito(true)
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
  
 
  //Fazer cadastro de cliente...
 

  
  


  return (
    <div>
      <Navbar
        navigationCarrosel={setNavigationC}
        navigationProduto={setNavigationP}
        navigationLogin={setNavLoginL}
        navigationRastreio={setNavigationR}
        navigationFaleConosco={setNavigationF}
        navigationPedido={setNavigationPE}
      />
      {navigationCarrosel && (<Carousel />)}
      {navigationProduto && (<Produtos />)}
      {AdicionarVenda && (<Vendas />)}
      {navPosVendas && (<PosVendas />)}
      {navigationLogin && (
        <div className="card d-flex align-items-center justify-content-center">
          <Login />
        </div>
      )}
      {navigationRastreio && <Rastreio />}
      {navigationFaleConosco && <FaleConosco />}
      {navigationPedido && <Pedido />}
      {navFecharPedido && <FecharPedido />} 
      {navBoleto && <Boleto />}
      {navCartaoCredito && <CartaoCredito />}
      {navCartaoDebito && <CartaoDebito />}
      {navFazerCadastro && <FazerCadastro />}
      <Footer />
    </div>
  );
}

export default App;
