import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Nav from './navegacao';
import Categoria from './categoria';

// ícones das categorias
import mercearia from './img/icons/shop.svg';
import hortifruti from './img/icons/apple.svg';
import padaria from './img/icons/bread.svg';
import frios from './img/icons/cheese.svg';
import congelados from './img/icons/frozen.svg';
import acougue from './img/icons/meat.svg';
import bebidas from './img/icons/alcohol.svg';
import higiene from './img/icons/hygiene.svg';
import outros from './img/icons/more.svg';

// ofertas
import oferta1 from './img/oferta1.jpg';
import oferta2 from './img/oferta2.jpg';
import oferta3 from './img/oferta3.jpg';
import oferta4 from './img/oferta4.jpg';
import oferta5 from './img/oferta5.jpg';

export default function App() {
  return (
    <Router>
      <div>
        {/*barra de navegação*/}
        <Nav/>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/mercearia">

          </Route>
          <Route path="/hortifruti">
            
          </Route>
          <Route path="/padaria">
          
          </Route>
          <Route path="/frios">
          
          </Route>
          <Route path="/congelados">
          
          </Route>
          <Route path="/acougue">
          
          </Route>
          <Route path="/bebidas">
          
          </Route>
          <Route path="/higiene">
          
          </Route>
          <Route path="/outros">
          
          </Route>
          {/* página principal */}
          <Route path="/">
            <div className="container-categorias">
              <Link to="mercearia"><Categoria nome="Mercearia" img={mercearia}/></Link>
              <Link to="hortifruti"><Categoria nome="Hortifruti" img={hortifruti}/></Link>
              <Link to="padaria"><Categoria nome="Padaria" img={padaria}/></Link>
              <Link to="frios"><Categoria nome="Frios" img={frios}/></Link>
              <Link to="congelados"><Categoria nome="Congelados" img={congelados}/></Link>
              <Link to="acougue"><Categoria nome="Açougue" img={acougue}/></Link>
              <Link to="bebidas"><Categoria nome="Bebidas" img={bebidas}/></Link>
              <Link to="higiene"><Categoria nome="Higiene" img={higiene}/></Link>
              <Link to="outros"><Categoria nome="Outros" img={outros}/></Link>
            </div>

            <div className="ofertas">
              <p>OFERTAS EM DESTAQUE</p>
            </div>

            <div className="container-ofertas">
              <div className="linha">
                <img src={oferta1}/>
                <img src={oferta2}/>
              </div>

              <div className="linha">
                <img src={oferta3}/>
                <img src={oferta4}/>
                <img src={oferta5}/>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}