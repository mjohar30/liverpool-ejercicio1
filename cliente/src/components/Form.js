import React, { Component } from 'react';
import {Button, Form as Formu} from 'react-bootstrap';

class Form extends Component {
    render() {
        return (
            <Formu>
                <Formu.Group controlId="formBasicEmail">
                <Formu.Label>Introduzca el nombre del producto</Formu.Label>
                <Formu.Control type="string" placeholder="Producto" />
                </Formu.Group>
                <Formu.Group controlId="formBasicPassword">
                <Formu.Label>Introduzca el precio del producto</Formu.Label>
                <Formu.Control type="number" placeholder="Precio" />
                </Formu.Group>
                <Formu.Group controlId="formBasicFile">
                <Formu.Label>Suba la imagen del producto</Formu.Label>
                <Formu.Control type="file"/>
                </Formu.Group>
                <Button variant="primary" type="submit">
                Aceptar
                </Button>
            </Formu>
        );
    }
}

export default Form;