import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav} from 'react-bootstrap'
import './index.css'
import logo from './logo.svg'
import App from './App'
import Form from './components/Form'
import ItemList from './components/ItemsList'

const routing = (
    <Router>
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/">
                <img
                src={logo}
                className="d-inline-block align-top"
                alt="Liverpool logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/">Home</Link>     
                <Link to="/form">Form</Link>
                <Link to="/itemList">ItemList</Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/form" component={Form} />
            <Route path="/itemList" component={ItemList} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
