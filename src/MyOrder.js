import React from 'react';
class MyOrder extends React.Component{

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
        <h3>My Orders:</h3>
        
      </div>
      );
  
    }
  }

export default MyOrder;
