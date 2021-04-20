
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


    console.log("UPDATE");
    console.log(this.props.orderList);
    var orderList=this.props.orderList.map((order,index)=>
        <div key={index}>
        {order.type}
        </div>
        );

  console.log(orderList);
  return (
      
    <div>
    <div>OrderList:</div>
    {orderList ?
    <React.Fragment >{orderList}</React.Fragment>
    : 
    <React.Fragment></React.Fragment>  }         
    </div>
    );

  }
}

export default OrderList;
