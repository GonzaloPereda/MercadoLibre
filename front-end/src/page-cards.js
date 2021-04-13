import React, { Component } from "react";
import SearhBar from "./Component/search-bar.js";
import "./page-cards.css";
import Loading from "./Component/loading.js";
import Error from "./Component/error.js";
import Card from "./Component/card.js";

class PageSearchResult extends Component {
  state = {
    data: {
      item: [
        {
          pictures: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }],
          shipping: [
            {
              free_shipping: "",
            },
          ],
        },
      ],
    },
  };

  handleChange = (e) => {
    console.log(e, "soy el handle de esta page");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Utilizo este componente que se ejecuta antes que se renderice
  componentDidMount() {
    let ide = this.props.history.location.search.substr(1);
    this.fetchData("http://localhost:5000/items/" + ide);
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
        <SearhBar onChange={this.handleChange} busqueda={this.state.busqueda} />
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="tarjeta">
          {this.state.data.item.map((index, i) => {
            return (
              <Card
                // Utilizo props que declare en el componente card.js
                precio={index.price}
                titulo={index.title}
                img={index.pictures[0]["url"]}
                ide={index.id}
                sold={index.sold_quantity}
                key={i}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
