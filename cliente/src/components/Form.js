import React, { Component } from 'react';
import {Button, Form as Formu} from 'react-bootstrap';
import './Form.css'

class Form extends Component {

    state = {
        name: '',
        price: '',
        images: []
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        fetch('http://localhost:3002/items', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state)
           });
    }   

    handleChange = e => {
        this.setState({
                [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Formu onChange={this.handleChange}>
                <Formu.Group controlId="formBasicEmail">
                <Formu.Label>Introduzca el nombre del producto</Formu.Label>
                <Formu.Control type="string" name="name" placeholder="Producto" value={this.name} onChange={this.onChange} />
                </Formu.Group>
                <Formu.Group controlId="formBasicPassword">
                <Formu.Label>Introduzca el precio del producto</Formu.Label>
                <Formu.Control type="number" name="price" placeholder="Precio" value={this.price} onChange={this.onChange}  />
                </Formu.Group>
                <Formu.Group controlId="formBasicFile">
                <Formu.Label>Suba la imagen del producto</Formu.Label>
                <Formu.Control type="file" name="images" value={this.images} onChange={this.onChange}/>
                <p>Las imágenes por el momento no se pueden guardar</p>
                </Formu.Group>
                <Button onClick={this.handleSubmit} variant="primary" type="submit">
                Aceptar
                </Button>
            </Formu>
        );
    }
}

export default Form;