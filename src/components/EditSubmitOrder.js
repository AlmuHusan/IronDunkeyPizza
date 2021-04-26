import Button from 'react-bootstrap/Button';
import React from 'react';
import userEvent from '@testing-library/user-event';

class EditSubmitOrder extends React.Component{

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
    var toppings="";
    if(this.props.orderList.length>0){
    var editOrder=this.props.orderList.map((order,index)=>{
      toppings="";
      for (var i = 0; i < order.toppings.length; i++) {
        toppings+=order.toppings[i]+" "
      } 
    
      return(
        <tr key={index}>
        <th>{order.size} {toppings} {order.item} {order.menuType}: ${order.price.toFixed(2)}</th>
        <th><Button size="sm" variant="danger" onClick={()=>this.props.deleteOrderFunc(order)}>Delete Item</Button></th>
        </tr>);
      }
        );

    }
    var cityState="";
    if(this.props.userData.city!=""){
      cityState=<div>{this.props.userData.city},{this.props.userData.state} {this.props.userData.zip}</div>
    }
  return (
    <div>
    <div>Review Your Order:</div>
    <div>Name: {this.props.userData.name}</div>
    <div>Delivery Type: {this.props.userData.deliveryType}</div>
    <div>Address: {this.props.userData.address}</div>
    {cityState}
    <table>
      <tbody>
    {editOrder ?
      <React.Fragment >{editOrder}<Button onClick={()=>this.props.submitOrderFunc()}>Submit Order</Button></React.Fragment>
      : 
      <React.Fragment><div>Your order is currently empty....</div></React.Fragment>  
    } 
    </tbody>
    </table>
    </div>
    );

  }
}

export default EditSubmitOrder;