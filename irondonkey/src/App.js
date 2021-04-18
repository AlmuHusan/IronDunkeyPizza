import logo from './logo.svg';
import './App.css';
import {Navbar,Nav} from 'react-bootstrap'
import React, { Component } from 'react';
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
    
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#aboutus" className="mr-sm-2">About Us</Nav.Link>
          <Nav.Link href="#contact" className="mr-sm-2">Contact</Nav.Link>
        </Nav>
        <Nav className="mr-sm-2">
        <Nav.Link href="#order" id="order" className="ml-auto ">Order Now</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
    
    
    );

  }
}

export default App;
