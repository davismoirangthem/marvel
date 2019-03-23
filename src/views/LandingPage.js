import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class LandingPage extends Component{
  handleClick = () => {
    this.props.history.push('mcu');
  }

  render(){
    return(
      <div>
        <center>
          <h1>RIP STAN LEE</h1>
          <Button variant="contained" color="primary" onClick={this.handleClick}>
            Explore Heroes from the Marvel Cinematic Universe
          </Button>
        </center>
      </div>
    );
  }
}

export default LandingPage;
