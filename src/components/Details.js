import React, { Component } from "react";
import { instrumentos } from "../data/instrumentos.json";
import Navigation from "./Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      instrumentos,
    };
  }

  render() {
    const idInstrumento = this.props.match.params.id;
    const instrumentoEncontrado = instrumentos.filter(
      (instrumento) => instrumento.id === idInstrumento
    )[0];

    if (instrumentoEncontrado.costoEnvio === "G") {
      this.costoDescripcion = (
        <span className="envioGratis">
          <img
            src={require(`../assets/images/camion.png`)}
            alt="envio gratis"
          ></img>
          Envío gratis a todo el País
        </span>
      );
    } else {
      this.costoDescripcion = (
        <span className="costoEnvio">
          Costo de Envío Interior de Argentina: $
          {instrumentoEncontrado.costoEnvio}
        </span>
      );
    }

    return (
      <React.Fragment>
        <Navigation></Navigation>
        <Container className="container mt-5">
          <Row>
            <Col>
              <img
                src={require(`../assets/images/${instrumentoEncontrado.imagen}`)}
                alt="Imagen producto"
                className="imgDetails"
              ></img>
              <div className="descripcionInstrumento">
                <h5>Descipción</h5>
                <p>{instrumentoEncontrado.descripcion}</p>
              </div>
            </Col>
            <Col>
              <p className="cantidadVendida">
                {instrumentoEncontrado.cantidadVendida} vendidos
              </p>
              <h3>{instrumentoEncontrado.instrumento}</h3>
              <h2 className="precio">${instrumentoEncontrado.precio}</h2>
              <br></br>
              <p>Marca: {instrumentoEncontrado.marca}</p>
              <p>Modelo: {instrumentoEncontrado.modelo}</p>
              <p>Costo de envío:</p>
              <p>{this.costoDescripcion}</p>
              <br></br>
              <button className="btn btn-primary">Agregar al carrito</button>
            </Col>
          </Row>
          <Row>
            <a className="btn btn-primary" href="/productos">
              Volver
            </a>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Details;
