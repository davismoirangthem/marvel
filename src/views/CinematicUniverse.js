import React, { Component } from 'react';
import CommonHeader from '../components/CommonHeader';
import Grid from '@material-ui/core/Grid';
import HeroCard from '../components/HeroCard';
import '../styles/CinematicUniverse.css';

class CinematicUniverse extends Component{
  constructor(props){
    super(props);
    this.state = {
      heroes: [
        { id: 1, name: 'Iron Man' },
        { id: 2, name: 'Captain America' },
        { id: 3, name: 'Thor' },
        { id: 4, name: 'Hulk' },
        { id: 5, name: 'Back Widow' },
        { id: 6, name: 'Hawkeye' }
      ]
    }
  }
  render(){
    return(
      <div>
        <CommonHeader title='Marvel Cinematic Universe'/>
        <div className='main-container'>
          <Grid container spacing={24}>
            {this.state.heroes.map((hero,key) => {
              return(
                <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                  <HeroCard hero={hero} history={this.props.history}/>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default CinematicUniverse;
