
import React, { Component } from 'react';
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


  
  render(){



  return (
    
    <div>Desserts</div>
    );

  }
}

export default Desserts;
