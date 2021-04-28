
import React  from 'react';
class OrderList extends React.Component{

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

    console.log(this.props.orderList);
    var price =0;
    var toppings="";
    if(this.props.orderList.length>0){
    var orderList=this.props.orderList.map((order,index)=>{
      toppings="";
      for (var i = 0; i < order.toppings.length; i++) {
        toppings+=order.toppings[i]+" "
      } 
      return(
        <div key={index}>
        {order.size} {toppings} {order.item} {order.menuType}: ${order.price.toFixed(2)}
       
        </div>);
      }
        );
    for (var i = 0; i < this.props.orderList.length; i++) {
        price+=this.props.orderList[i].price;
      } 
    }
  return (
      
    <div>
    
    <h3>Order List:</h3>
    {orderList ?
    <React.Fragment >{orderList}</React.Fragment>
    : 
    <React.Fragment></React.Fragment>  } 
  
    <b>Total Cost: ${price.toFixed(2)}</b>
    </div>
    );

  }
}

export default OrderList;
