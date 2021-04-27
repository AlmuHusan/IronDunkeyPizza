import './App.css';
import React from 'react';
class Contact extends React.Component{

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
      <h3>Contact Us:</h3>
      <h5>Email:</h5>
      <div>theirondunkey@pizza.com</div>
      <br/>
      <h5>Our Locations:</h5>

      <div>4321 Steelyard </div>
      <div>Cleveland, Ohio</div>
      <div> 216-444-4444</div>
      <br/>
      <div>7245 Crayon Ave. </div>
      <div>Akron, Ohio</div>
      <div> 431-325-7492</div>
      <br/>
      <div>9631 Farm Rd. </div>
      <div>Parma, Ohio</div>
      <div> 440-440-4440</div>
      <br/>
      <div>3333 ALake </div>
      <div>Lakewood, Ohio</div>
      <div> 222-333-4444</div>
    </div>
    );

  }
}

export default Contact;
