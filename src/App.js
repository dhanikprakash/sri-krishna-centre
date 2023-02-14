import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import Faq from "./components/pages/Faq";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <ToastProvider>
          <Route
            render={({ location }) => (
              <Switch location={location}>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route path="/home" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services} />
                <Route path="/aboutus" component={Products} />
                <Route path="/team" component={Team} />
                <Route path="/faq" component={Faq} />
              </Switch>
            )}
          />
        </ToastProvider>
      </HashRouter>
    </>
  );
}

export default App;
