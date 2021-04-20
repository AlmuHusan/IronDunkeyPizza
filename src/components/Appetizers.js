
import React, { Component } from 'react';
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


  
  render(){



  return (
    
    <div>Appetizers</div>
    );

  }
}

export default Appetizers;
