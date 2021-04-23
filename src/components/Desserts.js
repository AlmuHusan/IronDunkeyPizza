
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Desserts extends React.Component{

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
if(event.target.icecream.checked) {
var newOrder={menuType:"Desert",size:"",item:"Ice Cream", toppings:[], price:3};
this.props.addOrderFunc(newOrder);
}
if(event.target.cookie.checked) {
var newOrder={menuType:"Desert",size:"",item:"Cookie",toppings:[],  price:1};
this.props.addOrderFunc(newOrder);
}
if(event.target.brownie.checked) {
var newOrder={menuType:"Desert",size:"",item:"Brownie", toppings:[], price:2};
this.props.addOrderFunc(newOrder);
}
if(event.target.churro.checked) {
var newOrder={menuType:"Desert",size:"",item:"Churro",toppings:[],  price:1.5};
this.props.addOrderFunc(newOrder);
}

}
render(){



return (
<div>
<h1>Grab a small treat!</h1>
<Form onSubmit={this.appetizerSubmit}>
<Form.Label>Deserts:</Form.Label>
<Form.Check id="icecream" label="Ice Cream $3.00" />
<Form.Check id="cookie" label="Cookie $1.00" />
<Form.Check id="brownie" label="Brownie $2.00" />
<Form.Check id="churro" label="Churro $1.50" />
<br/>
<Button type="submit">Add to Order</Button>
</Form>
</div>
);

}
}

export default Desserts;
