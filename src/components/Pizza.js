
import React, { Component } from 'react';

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


  
  render(){



  return (
    <div>
    <h1>Customize your Pizza</h1>
    <div>Size:</div>
 
    </div>
    );

  }
}

export default Pizza;
