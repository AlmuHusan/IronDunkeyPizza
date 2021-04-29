import './App.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import pic from './ryu.jpeg';
import pic2 from './donkey.jpg';
import pic3 from './cheese.jfif';
import background from './woodbackdrop.png'
class Home extends React.Component{

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
    
    <Carousel style={{width: 800, height: 400, marginLeft:"auto",marginRight:"auto",}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{width: 400, height: 400,maxWidth: "none"}}
      src={pic2}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to Iron Donkey Pizza</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic}
      style={{width: 400, height: 400,maxWidth: "none"}}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Find us at our many locations.</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{width: 400, height: 400,maxWidth: "none"}}
      src={pic3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Try out our cheesy pizza.</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
    );

  }
}

export default Home;
