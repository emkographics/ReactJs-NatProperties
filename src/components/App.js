import React from "react";
import Home from "./pages/Home";
import Leasing from "./pages/Leasing";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import GoogleMap from './map/Map';
import Management from './pages/Management';
import Contact from './pages/Contact';
import Development from './pages/Development'
import {Route, BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/development" component={Development} />
      <Route exact path="/leasing" component={Leasing} />
      <Route exact path="/management" component={Management} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/maps" component={GoogleMap} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
