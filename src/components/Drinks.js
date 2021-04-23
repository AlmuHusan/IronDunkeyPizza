
import React  from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
class Drinks extends React.Component{

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
var newOrder={menuType:"Drink",size:"",item:"",toppings:[], price:0};

if(event.target.smallSize.checked){ 
newOrder.size="Small";
newOrder.price=2.00;
}
else if(event.target.mediumSize.checked){
newOrder.size="Medium";
newOrder.price=3.00;
}
else{
newOrder.size="Large";
newOrder.price=4.00;
}
if(event.target.pepsi.checked) 
newOrder.item="Pepsi";
if(event.target.coke.checked)
newOrder.item="Coke";
if(event.target.aw.checked)
newOrder.item="A&W";
if(event.target.lemonade.checked) 
newOrder.item="Lemonade";
if(event.target.orange.checked)
newOrder.item="Orange Juice";

this.props.addOrderFunc(newOrder);
}
render(){



return (
<div>
<h1>Grab a drink!</h1>
<Form onSubmit={this.pizzaSubmit}>
<fieldset>
<Form.Group as={Row}>
<Form.Label as="legend" column sm={1}>
  Size
</Form.Label>
<Col sm={10}>
  <Form.Check
    type="radio"
    label="Small $2.00"
    name="sizes"
    id="smallSize"
  />
  <Form.Check
    type="radio"
    label="Medium $3.00"
    name="sizes"
    id="mediumSize"
  />
  <Form.Check
    type="radio"
    label="Large $4.00"
    name="sizes"
    id="largeSize"
    defaultChecked="true"
  />
</Col>
</Form.Group>
</fieldset>

<Form.Label>Drinks</Form.Label>
<fieldset>
<Form.Group>
<Form.Check id="pepsi" name="drink" type="radio"  label="Pepsi" />
<Form.Check id="coke" name="drink" type="radio" label="Coke" />
<Form.Check id="aw" name="drink" type="radio" label="A&W" />
<Form.Check id="lemonade" name="drink" type="radio" label="Lemonade" />
<Form.Check id="orange" name="drink" type="radio" label="Orange Juice" />
</Form.Group>
</fieldset>
<br/>
<Button type="submit">Add to Order</Button>
</Form>
</div>
);

}
}


export default Drinks;
