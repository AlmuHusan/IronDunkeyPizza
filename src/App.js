import logo from './logo.svg';
import './App.css';
import {Navbar,Nav} from 'react-bootstrap'
import React, { Component } from 'react';
import Order from './Order.js';
import Home from './Home.js';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


class App extends React.Component{

  constructor(props) {
          super(props);
          this.state = {
              loaded: false,
              regions: 'All Region',

          };


      }
      componentDidMount = async () => {
          this.setState({ loaded: true })
      }


  
  render(){



  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="about" className="mr-sm-2">About Us</Nav.Link>
          <Nav.Link href="contact" className="mr-sm-2">Contact</Nav.Link>
        </Nav>
        <Nav className="mr-sm-2">
        <Nav.Link href="order" id="order" className="ml-auto ">Order Now</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
    <Router>
    <Switch>
      <Route path="/order" component={Order} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/" component={() => <Home />} />

    </Switch>

  </Router>
  </div>
    
    );

  }
}

export default App;
