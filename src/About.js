import logo from './logo.svg';
import './App.css';
import {Navbar,Nav} from 'react-bootstrap'
import React, { Component } from 'react';
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
    
    <div>About</div>
    );

  }
}

export default About;