
import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
class BasicInfo extends React.Component{

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

      userSubmit=(event)=>{
        event.preventDefault();
        console.log(event);
        var newUser={name:"",address:"",city:"",state:"",zip:"",deliveryType:"",store:""}
        newUser.name=event.target.name.form.name.value;
        newUser.address=event.target.address.form.address.value;
        newUser.city=event.target.city.form.city.value;
        newUser.state=event.target.state.form.state.value;
        newUser.zip=event.target.zip.form.zip.value;

        if(event.target.store.checked)
          newUser.deliveryType="Store Pickup";
        else
          newUser.deliveryType="Delivery";


        if(event.target.storeLocation[0].selected)
          newUser.store="Cleveland";
        else if(event.target.storeLocation[0].selected)
          newUser.store="Akron";
        else if(event.target.storeLocation[0].selected)
          newUser.store="Parma";
        else
          newUser.store="Lakewood";
        console.log(newUser);
        this.props.updateUserFunc(newUser);
      }
  
  render(){



  return (
    <div>
      <div>Basic Information</div>
        <Form onSubmit={this.userSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Enter name" />
        </Form.Group>
        <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Delivery Type
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Pick up at a store"
          name="deliveryType"
          id="store"
        />
        <Form.Check
          type="radio"
          label="Deliver to your house"
          name="deliveryType"
          id="delivery"
        />
      </Col>
    </Form.Group>
  </fieldset>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="zip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="storeLocation">
      <Form.Label>Store Location</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option id="cle">Cleveland Store</option>
        <option id="akron">Akron Store</option>
        <option id="parma">Parma Store</option>
        <option id="lake">Lakewood Store</option>
      </Form.Control>
    </Form.Group>
    

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    );

  }
}

export default BasicInfo;