import React, { Component } from "react";
import PageSearchResult from "./page-search-result.js";
import PageHome from "./page-home.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PageCards from "./page-cards.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route exact path="/items" component={PageSearchResult} />
          <Route exact path="/items/:" component={PageCards} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
