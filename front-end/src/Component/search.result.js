import React, { Component } from "react";
import Card from "./card.js";
import Loading from "./loading.js";
import Error from "./error.js";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      results: [
        {
          shipping: {},
        },
      ],
    },
  };

  // Componente que utilizo para
  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData(
      "https://api.mercadolibre.com/sites/MLA/search?q=:" + termino
    );
  }

  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMensaje: data.message,
      });
    } else {
      this.setState({
        loading: false,
        data: data,
        error: false,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        {/* Evaluo el state y lo mapeo, que trabaja directamente con arreglos */}
        {this.state.data.results.slice(0, 4).map((index, i) => {
          return (
            <Card
              //Utilizo los props que declare en el componente Card.js
              precio={index.price}
              titulo={index.title}
              img={index.thumbnail}
              ide={index.id}
              shipping={index.free_shipping}
              condition={index.condition}
              key={i}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default SearchResult;
