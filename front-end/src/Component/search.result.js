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

  // item: [
  //   {
  //     pictures: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }],
  //   },
  // ],

  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData(
      "https://api.mercadolibre.com/sites/MLA/search?q=:" + termino
    );
  }

  // componentDidMount() {

  // }

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
        <div>
          {this.state.data.results.slice(0, 4).map((index, i) => {
            return (
              <Card
                // img={index.pictures[0]["url"]}
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

          {/* <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
