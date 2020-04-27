import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class CardProducto extends Component {
  render() {
    if (this.props.costoEnvio === "G") {
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
          Costo de Envío Interior de Argentina: ${this.props.costoEnvio}
        </span>
      );
    }

    return (
      <React.Fragment>
        <Card style={{ width: "18rem" }} className="mr-5 mb-5">
          <Card.Img
            variant="top"
            src={require(`../assets/images/${this.props.imagen}`)}
            alt="Imagen producto"
          />
          <Card.Body>
            <h3>
              <a href={`/details/${this.props.id}`}>{this.props.instrumento}</a>
            </h3>
            <div>
              <h3 className="precio">${this.props.precio}</h3>
              <p>{this.costoDescripcion}</p>
              <p className="cantidadVendida">
                {this.props.cantidadVendida} vendidos
              </p>
            </div>
            <Button variant="primary" href={`/details/${this.props.id}`}>
              Detalle
            </Button>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default CardProducto;
