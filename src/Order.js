import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import React from 'react';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';
import Appetizers from './components/Appetizers';
import Pizza from './components/Pizza';
import BasicInfo from './components/BasicInfo';
import OrderList from './components/OrderList';
class Home extends React.Component{

  constructor(props) {
          super(props);
          this.state = {
              loaded: false,
              regions: 'All Region',
              order:[]
          };


      }
      componentDidMount = async () => {
          this.setState({ loaded: true })
      }
      addOrder=(orderData)=>{
          var processOrder= this.state.order;
          processOrder.push(orderData)
          this.setState({order:processOrder})
          console.log(this.state.order)
      }

  
  render(){



  return (
    
    <Container>
  <Row>
    <Col sm={7}>

    <Tabs defaultActiveKey="basicInfo" transition={false} id="noanim-tab-example">
        <Tab eventKey="basicInfo" title="Basic Information">
            <BasicInfo/>       
        </Tab>
        <Tab eventKey="pizza" title="Pizza">
            <Pizza addOrderFunc={this.addOrder}/>

        </Tab>
        <Tab eventKey="appetizers" title="Appetizers">
            <Appetizers addOrderFunc={this.addOrder}/>
        </Tab>
        <Tab eventKey="drinks" title="Drinks">
            <Drinks addOrderFunc={this.addOrder}/>
        </Tab>
        <Tab eventKey="desserts" title="Deserts">
            <Desserts addOrderFunc={this.addOrder}/>
        </Tab>
    </Tabs>
    </Col>
    <Col sm={4}>
        <OrderList orderList={this.state.order} />
    </Col>
  </Row>

  </Container>
    );

  }
}

export default Home;
