import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';
import CommonHeader from '../components/CommonHeader';
import mcuController from '../controllers/mcuController';
import ironmancard from '../images/ironmancard.jpg';
import '../styles/McuHeroDescription.css';

class McuHeroDescription extends Component{
  constructor(props){
    super(props);
    this.state = {
      heroId: null,
      heroData: null
    }
  }

  componentDidMount(){
    try{
      let heroId = this.props.match.params.id;
      if(heroId){
        let heroData = mcuController.getMcuHeroData(heroId);
        this.setState({ heroId, heroData });
      }
    }
    catch(err){
      console.log('Unable to fetch id: ', err);
    }
  }

  render(){
    return(
      <React.Fragment>
        <CommonHeader title='Marvel Cinematic Universe' />
        <div className='hero-description-container'>
          {this.state.heroData ? (
            <React.Fragment>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={12} md={6} lg={5} xl={4}>
                  <img src={ironmancard} alt='hero image' height='250 px' />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7} xl={8}>
                  <h2>Name: {this.state.heroData.name}</h2>
                  <h2>Alias: {this.state.heroData.alias}</h2>
                  <h2>Played By: {this.state.heroData.actor}</h2>
                  <h2>First Appeared In: {this.state.heroData.firstAppearedIn}</h2>
                </Grid>
              </Grid>
              <br />
              <Divider variant='middle' />
              <br />
              <h2>Movie Appearances</h2>
              <ul>
                {this.state.heroData.moviesList.map((movie, key) => {
                  return(
                    <li key={key}>
                      {movie.name} ({movie.year})
                    </li>
                  )
                })}
              </ul>
            </React.Fragment>
          ):(
            <div className='progress-bar'>
              <LinearProgress />
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default McuHeroDescription;
