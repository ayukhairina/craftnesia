import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/product" component={Product}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
