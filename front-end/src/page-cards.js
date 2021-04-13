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
      descripcion: [{}],
    },
  };
  handleChange = (e) => {
    console.log(e, "soy el handle de esta page");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.fetchData();
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    let ide = this.props.history.location.search.substr(1);
    let url = "http://localhost:5000/items/" + ide;

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
                precio={index.price}
                titulo={index.title}
                img={index.pictures[0]["url"]}
                ide={index.id}
                // shipping={index.free_shipping}
                sold={index.sold_quantity}
                free={index.free_shipping}
                key={i}
              />
            );
          })}
          {/* <Description /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default PageSearchResult;
