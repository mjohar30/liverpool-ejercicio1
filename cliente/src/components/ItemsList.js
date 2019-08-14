import React, { Component } from 'react';
import {Card, Button, Modal, Form as Formu} from 'react-bootstrap'
import Swal from 'sweetalert2'

import './ItemsList.css'

class ItemsList extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            items: [],
            show: false,
            update: {
                _id: '',
                name: '',
                price: '',
                }
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
    }

    showModal() {
        this.setState({
            show: true
        });
    }

    hideModal(){
      this.setState({
        show: false
      })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUpdate = async e => {
        e.preventDefault();
        await fetch(`http://localhost:3002/items/${this.state._id}/update`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(this.state)
           });
        Swal.fire(
            'Item actualizado',
            'Refrescar la página para visualizar los cambios',
            'success'
        )
    }   

    handleDelete = async e => {
        e.preventDefault()
        await Swal.fire({
            title: 'Enter your id',
            input: 'text',
            showCancelButton: true,
            inputValidator: (value) => {
              if (!value) {
                return 'You need to write something!'
              }
              else {
                fetch(`http://localhost:3002/items/${value}/delete`, {
                    method: 'delete',
                   });
              }
            }
          })
          Swal.fire(
            'Item eliminado',
            'Refrescar la página para visualizar los cambios',
            'success'
        )
        
    } 

    async componentDidMount(){
        const response = await fetch('http://localhost:3002/items')

        const {data = {}} = await response.json()
        
        const {items} = data
        this.setState({items})
    }

    render() {
        return (
            <div className="Main">
            {
         this.state.items.map(items =>(
            <div>
                <Card style={{ width: '18rem', margin:'10px', backgroundColor: '#d8d8d8' }}>
                    <Card.Img variant="top" src={items.images}title="Imagen del producto" />
                    <Card.Body>
                      <Card.Title>{items.name}</Card.Title>
                      <Card.Text>Precio: {items.price}</Card.Text>
                      <Card.Text>id: {items._id}</Card.Text>
                      <Button onClick={this.showModal} variant="primary">Actualizar producto</Button>
                      <br/>
                      <Button onClick={this.handleDelete} variant="danger">Eliminar producto</Button>
                    </Card.Body>
                </Card>
                
                <br/>
            </div>
        ))
            }
            <Modal show={this.state.show} onHide={this.hideModal} aria-labelledby='ModalHeader'>
                    <Modal.Header closeButton>
                            <Modal.Title id='ModalHeader'>Actualizar producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formu onChange={this.handleChange}>
                            <Formu.Group controlId="formBasicId">
                            <Formu.Label>Id del producto</Formu.Label>
                            <Formu.Control  type="string" name="_id" placeholder="ID" value={this._id} onChange={this.onChange} />
                            </Formu.Group>
                            <Formu.Group controlId="formBasicProduct">
                            <Formu.Label>Introduzca el nombre del producto</Formu.Label>
                            <Formu.Control  type="string" name="name" placeholder="Producto" value={this.name} onChange={this.onChange} />
                            </Formu.Group>
                            <Formu.Group controlId="formBasicPrice">
                            <Formu.Label>Introduzca el precio del producto</Formu.Label>
                            <Formu.Control type="number" name="price" placeholder="Precio" value={this.price} onChange={this.onChange}  />
                            </Formu.Group>
                        <Button onClick={this.handleUpdate}  className='btn btn-primary'>
                            Guardar
                        </Button>
                        </Formu>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
        </div>
        )
    }
}

export default ItemsList;


