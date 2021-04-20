
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
    var sizes=["smallSize","mediumSize","largeSize"];
    var newOrder={type:"Pizza",properties:{}};
    console.log(event);
    console.log(event.target.smallSize.checked);

    if(event.target.smallSize.checked) 
      newOrder.properties["Size"]="Small";
    else if(event.target.mediumSize.checked)
      newOrder.properties["Size"]="Medium";
    else
      newOrder.properties["Size"]="Large";
    var toppings=[];
    if(event.target.cheese.checked) 
      toppings.push("chesse");
    else if(event.target.peperoni.checked)
      toppings.push("peperoni");
    else
      toppings.push("bananas");
    newOrder.properties["Toppings"]=toppings;
    this.props.addOrderFunc(newOrder);
  }
  render(){



  return (
    <div>
    <h1>Customize your Pizza</h1>
    <Form onSubmit={this.pizzaSubmit}>
    <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Size
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Small"
          name="sizes"
          id="smallSize"
        />
        <Form.Check
          type="radio"
          label="Medium"
          name="sizes"
          id="mediumSize"
        />
        <Form.Check
          type="radio"
          label="Large"
          name="sizes"
          id="largeSize"
        />
      </Col>
    </Form.Group>
  </fieldset>
    <Form.Label>Toppings</Form.Label>
    <Form.Check id="cheese" label="Cheese" />
    <Form.Check id="peperoni" label="Peperoni" />
    <Form.Check id="bananas" label="Bananas" />
    <Button type="submit">Submit</Button>
  </Form>
    </div>
    );

  }
}

export default Pizza;
