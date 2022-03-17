import React, { useState } from "react";
import Navbar from "../src/componente/Index_show_menu/index_show_menu";
import Carousel from "../src/componente/carrosel/carrosel";
import Footer from "../src/componente/footer/footer";
import Produtos from "./componente/Produtos/produtos";
import eventService from "./eventservice";
import Administrativo from "./componente/Administrativo/administrativo";
import Rastreio from "./componente/rastreio/rastreio";
import FaleConosco from "./componente/faleConosco/faleConosco";
import Pedido from "./componente/pedido/pedido";

function App() {
  const [navigationC, setNavigationC] = useState(true);
  const [navigationP, setNavigationP] = useState(false);
  const [navigationA, setNavigationA] = useState(false);
  const [navigationR, setNavigationR] = useState(false);

  // const [navigation, setNavigation] = useState(<Carousel />);
  // eventService.addCallback("exibirProdutos", () => setNavigation(<Produtos />));
  // eventService.addCallback("exibirAdministrativo", () =>
  //   setNavigation(<Administrativo />)
  // );
  // eventService.addCallback("exibirRastreio", () => setNavigation(<Rastreio />));
  // eventService.addCallback("exibirFaleConosco", () =>
  //   setNavigation(<FaleConosco />)
  // );
  // eventService.addCallback("exibirPedido", () => setNavigation(<Pedido />));
  return (
    <div>
      <Navbar
        navigationC={setNavigationC}
        navigationP={setNavigationP}
        navigationA={setNavigationA}
        navigationR={setNavigationR}
      />
      {navigationC && <Carousel />}
      {navigationP && <Produtos />}
      {navigationA && <Administrativo />}
      {navigationR && <Rastreio />}
      {/* <Rastreio />
      <Pedido /> */}
      <Footer />
    </div>
  );
}

export default App;
