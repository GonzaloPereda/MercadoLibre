import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

// Componente relacionado con la busqueda
class Card extends React.Component {
  render() {
    return (
      <Link to={"/items/:?" + this.props.ide}>
        <div className="item">
          <img className="pic" src={this.props.img} alt="" />

          <p className="titulo">{this.props.titulo}</p>
          <p className="titulo-precio">${this.props.precio}</p>
          {/* <p className="titulo-id">{this.props.ide}</p> */}
          <p className="titulo-shipping">{this.props.shipping}</p>
          <p className="titulo-sold-quantity">{this.props.sold}</p>
          <p className="titulo-free-shipping">{this.props.free}</p>
          <p className="titulo-condition">{this.props.condition}</p>

          {/* <p className="descripcion">{this.props.descripcion}</p> */}
        </div>
      </Link>
    );
  }
}

export default Card;
