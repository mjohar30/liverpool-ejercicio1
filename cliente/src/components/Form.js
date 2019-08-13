import React, { Component } from 'react';
import {Button, Form as Formu} from 'react-bootstrap';

class Form extends Component {
    render() {
        return (
            <div>

                <Formu>
                    <Formu.Group controlId="formBasicEmail">
                    <Formu.Label>Introduzca el nombre del producto</Formu.Label>
                    <Formu.Control type="string" placeholder="Producto" />
                    </Formu.Group>
                    <Formu.Group controlId="formBasicPassword">
                    <Formu.Label>Password</Formu.Label>
                    <Formu.Control type="password" placeholder="Password" />
                    </Formu.Group>
                    <Formu.Group controlId="formBasicChecbox">
                    <Formu.Check type="checkbox" label="Check me out" />
                    </Formu.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Formu> 
            </div>
        );
    }
}

export default Form;