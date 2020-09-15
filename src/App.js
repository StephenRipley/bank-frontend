import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MortgageCalculator from "./components/mortgageCalculator";
import LoanChecker from "./components/loanChecker";
import Login from "./components/Login";
import Account from "./components/Account";
import NavBar from "./components/NavBar";
import registration from "./components/registration";
import home from "./components/HomePage";
import currentAccountTransaction from "./components/currentAccountTransaction";
import Products from "./components/Products";
import NewCurrentAccount from "./components/NewCurrentAccount";

function App() {
  return (
    <div className="container">
      <div className="nav-wrapper indigo lighten-4"></div>
      <Router>
        <NavBar />
        <div className="row">
          <div>
            <Route exact path="/" component={home} />
            <Route exact path="/register" component={registration} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/account/currentTransactions" component={currentAccountTransaction} />
            <Route exact path="/loanchecker" component={LoanChecker} />
            <Route
              exact
              path="/mortgageCalculator"
              component={MortgageCalculator}
            />
            <Route exact path="/products" component={Products} />
            <Route exact path="/newcurrentaccount" component={NewCurrentAccount} />
          </div>
        </div>
      </Router>
      <br />
      <br />
    </div>
  );
}

export default App;
