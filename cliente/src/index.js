import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav} from 'react-bootstrap'
import './index.css'
import logo from './logo.svg'
import App from './App'
import Form from './components/Form'
import ItemList from './components/ItemsList'

const routing = (
    <Router>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <img
                src={logo}
                className="d-inline-block align-top"
                alt="Liverpool logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto links">
                <Nav.Link className="link" href="/">Home </Nav.Link>
                <Nav.Link className="link" href="/form">Form </Nav.Link>
                <Nav.Link className="link" href="/itemList">ItemList </Nav.Link>
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
