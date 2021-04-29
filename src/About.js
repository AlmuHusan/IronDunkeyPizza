import './App.css';
import React from 'react';
import pic from './irondunkey.png';
import background from './woodbackdrop.png'
class About extends React.Component{

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
    
    <div style={{
      backgroundImage: "url(" + background + ")",
      width: "100%",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundsize: "cover"
    }}>
      <h3 style={{
        color: "whitesmoke"
      }}>About Us:</h3>
      <img

      style={{width: 400, height: 400,maxWidth: "400"}}
      src={pic}
      alt="First slide"
    />
    <p style={{
        color: "whitesmoke"
      }}>Iron Donkey Pizza is a noble pizza place with our humble beginings starting at downtown Cleveland  </p>
    </div>
    );

  }
}

export default About;
