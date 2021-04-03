import React from 'react';
import landingPageImg from './Assets/homepageBackground.jpg';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <img style={{ display: 'flex' , width: '100%', height: '100%' }} src={landingPageImg} />;
        <h1>UMD - Black Lives Matter - List of Demands</h1>
      </div>
    )
  }
}

export default Homepage;
