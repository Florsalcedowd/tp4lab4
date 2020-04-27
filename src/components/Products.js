import React, { Component } from "react";
import Navigation from "./Navigation";
import { instrumentos } from "../data/instrumentos.json";
import CardProducto from "./CardProducto";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Products extends Component {
  constructor() {
    super();
    this.state = { instrumentos };
  }

  render() {
    const instrumentos = this.state.instrumentos.map((instrumento, i) => {
      return (
        <CardProducto
          key={instrumento.id}
          id={instrumento.id}
          imagen={instrumento.imagen}
          precio={instrumento.precio}
          costoEnvio={instrumento.costoEnvio}
          cantidadVendida={instrumento.cantidadVendida}
          instrumento={instrumento.instrumento}
        ></CardProducto>
      );
    });
    return (
      <React.Fragment>
        <Navigation></Navigation>
        <Container className="container mt-5">
          <Row>{instrumentos}</Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Products;
