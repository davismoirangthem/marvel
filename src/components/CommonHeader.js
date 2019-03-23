import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../styles/CommonHeader.css';

class CommonHeader extends Component{
  render(){
    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <center>{ this.props.title }</center>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default CommonHeader;
