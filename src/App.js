import React from "react";
import {Redirect, Switch ,Route } from "react-router-dom";
import About from "./component/About";
import Cart from "./component/Cart";
import CheckOut from "./component/CheckOut";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Product from "./component/Product";
import ProductDetail from "./component/ProductDetail";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
