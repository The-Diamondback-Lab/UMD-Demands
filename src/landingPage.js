import React from 'react';
import landing_page from './Assets/homepageBackground.jpg';
import "bootstrap/dist/css/bootstrap.min.css";

class homepage extends React.Component {

  render() {
    return (
      <div>
        <img style={{ display: 'flex' , width: '100%', height: '100%' }} src={landing_page} />;
        <h1>UMD - Black Lives Matter - List of Demands</h1>
      </div>
    )
  }


}

export default homepage;
