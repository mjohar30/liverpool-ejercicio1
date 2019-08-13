import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap'

class ItemsList extends Component {
    constructor(props){
        super(props)

        this.state = {
            items: []
        }
    }

    async componentDidMount(){
        const response = await fetch('http://localhost:3002/items')
        console.log(response)

        const {data = {}} = await response.json()

        const {items} = data
        console.log({items})
        this.setState({items})
    }


    render() {
        return this.state.items.map(items =>(
            
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={items.images}title="Imagen del producto" />
                    <Card.Body>
                      <Card.Title>{items.name}</Card.Title>
                      <Card.Text>{items.price}</Card.Text>
                      <Button variant="danger">Eliminar producto</Button>
                    </Card.Body>
                </Card>
            
        ))
    }
}

export default ItemsList;