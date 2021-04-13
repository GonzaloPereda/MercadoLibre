import React from "react";
import "./page-home.css";
import logo from "./logo.png";
import boton from "./boton.png";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/items?search=" + this.state.busqueda);
  };

  onChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  state = {
    busqueda: "",
  };
  render() {
    return (
      <React.Fragment>
        <div className="nav-home">
          <img src={logo} alt="" id="logo" />
          <form className="formulario" name="form" onSubmit={this.handleSubmit}>
            <input
              name="busqueda"
              type="text"
              id="nav-input"
              placeholder="Nunca dejes de buscar"
              value={this.props.busqueda}
              onChange={this.onChange} // le paso este evento a mi prop de <SearhBar onChange={this.changeHandle} />
            />
            <input type="image" src={boton} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default PageHome;
