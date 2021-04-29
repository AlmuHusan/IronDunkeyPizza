
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Appetizers extends React.Component{

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


  appetizerSubmit=(event)=>{
    event.preventDefault();
    if(event.target.fries.checked) {
      var newOrder={id:this.props.orderLength,menuType:"Appetizer",size:"",item:"French Fries", toppings:[], price:3};
      this.props.addOrderFunc(newOrder);
    }
    if(event.target.salad.checked) {
      var newOrder={id:this.props.orderLength,menuType:"Appetizer",size:"",item:"Salad",toppings:[],  price:4};
      this.props.addOrderFunc(newOrder);
      }
    if(event.target.sixChicken.checked) {
      var newOrder={id:this.props.orderLength,menuType:"Appetizer",size:"",item:"6pc. Chicken Wing", toppings:[], price:4};
      this.props.addOrderFunc(newOrder);
      }
    if(event.target.twelveChicken.checked) {
      var newOrder={id:this.props.orderLength,menuType:"Appetizer",size:"",item:"12pc. Chicken Wing",toppings:[],  price:7.5};
      this.props.addOrderFunc(newOrder);
      }
    if(event.target.sixBuffalo.checked) {
      var newOrder={id:this.props.orderLength,menuType:"Appetizer",size:"",item:"6pc. Buffalo Wing",toppings:[],  price:4};
      this.props.addOrderFunc(newOrder);
      }
    if(event.target.twelveBuffalo.checked) {
      var newOrder={id:this.props.orderLength,menuType:"Appetizer",size:"",item:"12pc. Buffalo Wing",toppings:[],  price:7.5};
      this.props.addOrderFunc(newOrder);
      }
  }
  render(){



  return (
    <div>
    <h1>Add some appetizers!</h1>
    <Form onSubmit={this.appetizerSubmit}>
    <Form.Label>Appetizers:</Form.Label>
    <Form.Check id="fries" label="French Fries $3.00" />
    <Form.Check id="salad" label="Salad $4.00" />
    <Form.Check id="sixChicken" label="6pc. Chicken Wing $4.00" />
    <Form.Check id="twelveChicken" label="12pc. Chicken Wing $7.50" />
    <Form.Check id="sixBuffalo" label="6pc. Buffalo Wing $4.00" />
    <Form.Check id="twelveBuffalo" label="12pc. Buffalo Wing $7.50" />
    <br/>
    <Button type="submit">Add to Order</Button>
  </Form>
    </div>
    );

  }
}

export default Appetizers;
