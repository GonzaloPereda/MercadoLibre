import React, { Component } from "react";
import "./search-bar.css";
import logo from "../logo.png";
import boton from "../boton.png";

class SearchBar extends Component {
  state = {
    busqueda: "",
  };

  handleChange = (e) => {
    this.setState({ busqueda: e.target.value }); // dentro de busqueda guardo lo que ingresa el usuario
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        {/* Formulario de la barra */}
        <div className="nav-home">
          <img src={logo} alt="" id="logo" />
          <form className="formulario" name="form" onSubmit={this.handleSubmit}>
            <input
              name="busqueda"
              type="text"
              className="nav-input"
              placeholder="Nunca dejes de buscar"
              value={this.props.busqueda}
              onChange={this.props.onChange} // le paso este evento a mi prop de <SearhBar onChange={this.changeHandle} />
            />
            <input type="image" src={boton} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
