import logo from './logo.svg';
import './App.css';
import {Navbar,Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import React, { Component } from 'react';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';
import Appetizers from './components/Appetizers';
import Pizza from './components/Pizza';
import basicInfo from './components/basicInfo';
class Home extends React.Component{

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
    
    <Container>
  <Row>
    <Col sm={9}>
        <div>Order Details:</div>
    <Tabs defaultActiveKey="basicInfo" transition={false} id="noanim-tab-example">
        <Tab eventKey="basicInfo" title="Basic Information">
            <basicInfo/>       
        </Tab>
        <Tab eventKey="pizza" title="Pizza">
            <Pizza/>

        </Tab>
        <Tab eventKey="appetizers" title="Appetizers">
            <Appetizers/>
        </Tab>
        <Tab eventKey="drinks" title="Drinks">
            <Drinks/>
        </Tab>
        <Tab eventKey="desserts" title="Deserts">
            <Desserts/>
        </Tab>
    </Tabs>
    </Col>
    <Col sm={2}>
        <div>Order List:</div>
        
        
        </Col>
  </Row>
  </Container>
    );

  }
}

export default Home;
