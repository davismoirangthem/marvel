import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Favorite from '@material-ui/icons/Favorite';
import Code from '@material-ui/icons/Code';
import '../styles/CommonFooter.scss';

class CommonFooter extends Component {
  render () {
    return (
      <div className="footer_container">
        <Grid container className="footer">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            Copyright &copy; MARVEL CINEMATIC UNIVERSE.
          </Grid>
          <Grid item  xs={12} sm={12} md={6} lg={6} className="made">
            Made with <Favorite className="heart icons"/>in India.
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CommonFooter;
