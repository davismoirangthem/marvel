import React, { Component } from 'react';
import CommonHeader from '../components/CommonHeader';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
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
      ],
      showSuggest: false,
      suggestions: [
        { name: 'Iron Man', id: 1 },
        { name: 'Captain America', id: 2 },
        { name: 'Thor', id: 3 }
      ]
    }
  }

  handleSearch = (event) => {
    if(event.target.value){
      this.setState({ showSuggest: true });
    }
    else{
      this.setState({ showSuggest: false });
    }
  }

  selectHero = (hero) => {
    this.setState({ showSuggest: false });
    this.props.history.push(`mcu/hero/${hero.id}`);
  }

  render(){
    return(
      <div>
        <CommonHeader title='Marvel Cinematic Universe'/>
        <div className='search-container'>
          <TextField type='text' label='Search' margin='dense' variant='outlined' fullWidth={true}
            onChange={this.handleSearch}
          />
          {this.state.showSuggest &&
            <div className='autosuggest-box'>
              {this.state.suggestions.map((hero, key) => {
                return (
                  <React.Fragment key={key}>
                    <p onClick={() => this.selectHero(hero)}>{ hero.name }</p>
                    <Divider />
                  </React.Fragment>
                )
              })}
            </div>
          }
        </div>
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
