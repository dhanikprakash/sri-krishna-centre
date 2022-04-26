import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import ServicesV2 from "./components/pages/ServicesV2";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import Faq from "./components/pages/Faq";

function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/home" exact component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/servicesv2" component={ServicesV2} />
              <Route path="/products" component={Products} />
              <Route path="/team" component={Team} />
              <Route path="/faq" component={Faq} />
              <Route path="/contact" component={Contact} />
            </Switch>
          )}
        />
      </HashRouter>
    </>
  );
}

export default App;