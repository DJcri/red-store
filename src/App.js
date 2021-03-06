import "./App.css";

//import components
import About from "./components/About";
import Account from "./components/Account";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Products from "./components/Products";

//import react router stuff
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
