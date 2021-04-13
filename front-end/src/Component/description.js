// import React, { Component } from "react";
// import SearhBar from "./Component/search-bar.js";

// import "./page-cards.css";
// import Loading from "./Component/loading.js";
// import Error from "./Component/error.js";
// import Card from "./Component/card.js";

// class Description extends Component {
//   state = {
//     data: {
//       descripcion: [{}],
//     },
//   };
//   handleChange = (e) => {
//     console.log(e, "soy el handle de esta page");
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   componentDidMount() {
//     let id = this.props.history.location.search.substr(1);
//     this.fetchData("http://localhost:5000/items/" + id + "/description");
//   }

//   fetchData = async (url) => {
//     this.setState({
//       loading: true,
//     });
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//     if (data.error) {
//       this.setState({
//         loading: false,
//         error: true,
//         errorMensaje: data.message,
//       });
//     } else {
//       this.setState({
//         loading: false,
//         data: data,
//         error: false,
//       });
//     }
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <SearhBar onChange={this.handleChange} />
//         {this.state.loading && <Loading />}
//         {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
//         <div className="tarjeta">
//           {this.state.data.descripcion.map((index, i) => {
//             return <Card descripcion={index.plain_text} key={i} />;
//           })}
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default Description;
