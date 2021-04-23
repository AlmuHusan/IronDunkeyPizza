
import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
class Pizza extends React.Component{

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


  pizzaSubmit=(event)=>{
    event.preventDefault();
    var newOrder={menuType:"Pizza",size:"",item:"",toppings:[], price:0};
    
    if(event.target.smallSize.checked){ 
      newOrder.size="Small";
      newOrder.price=3.75;
    }
    else if(event.target.mediumSize.checked){
      newOrder.size="Medium";
      newOrder.price=6.00;
    }
    else{
      newOrder.size="Large";
      newOrder.price=9.00;
    }
    if(event.target.cheese.checked) 
      newOrder.toppings.push("Chesse");
    if(event.target.peperoni.checked)
      newOrder.toppings.push("Peperoni");
    if(event.target.bananas.checked)
      newOrder.toppings.push("Bananas");
    this.props.addOrderFunc(newOrder);
  }
  render(){



  return (
    <div>
    <h1>Customize your Pizza</h1>
    <Form onSubmit={this.pizzaSubmit}>
    <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={1}>
        Size
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Small $3.75"
          name="sizes"
          id="smallSize"
        />
        <Form.Check
          type="radio"
          label="Medium $6.00"
          name="sizes"
          id="mediumSize"
        />
        <Form.Check
          type="radio"
          label="Large $9.00"
          name="sizes"
          id="largeSize"
          defaultChecked="true"
        />
      </Col>
    </Form.Group>
  </fieldset>
    <Form.Label>Toppings</Form.Label>
    <Form.Check id="cheese" label="Cheese" />
    <Form.Check id="peperoni" label="Peperoni" />
    <Form.Check id="bananas" label="Bananas" />
    <br/>
    <Button type="submit">Add to Order</Button>
  </Form>
    </div>
    );

  }
}

export default Pizza;
