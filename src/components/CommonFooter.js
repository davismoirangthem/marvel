import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Favorite from '@material-ui/icons/Favorite';
import '../styles/CommonFooter.scss';

class CommonFooter extends Component {
  render () {
    return (
      <div className="footer_container">
        <Grid container className="footer">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            All characters are properties of <a href='https://www.marvel.com' target='_blank' rel="noopener noreferrer">Marvel</a>
          </Grid>
          <Grid item  xs={12} sm={12} md={6} lg={6} className="made">
            Built with <Favorite className='heart icons'/> By <a href='https://www.linkedin.com/in/davis-moirangthem' target='_blank' rel="noopener noreferrer">Davis Moirangthem</a> & <a href='https://www.linkedin.com/in/shrinath-nayak' target='_blank' rel="noopener noreferrer"> Shrinath Nayak</a>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CommonFooter;
