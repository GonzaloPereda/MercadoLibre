import React, { Component } from "react";

import SearhBar from "./Component/search-bar.js";
import SearchResult from "./Component/search.result.js";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };

  componentDidMount() {
    let search = this.props.history.location.search
      .substr(8, 30)
      .replace("%20", " ");

    this.setState({
      busqueda: search,
    });
  }

  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearhBar onChange={this.handleChange} busqueda={this.state.busqueda} />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
