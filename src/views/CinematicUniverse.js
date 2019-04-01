import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommonHeader from '../components/CommonHeader';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import HeroCard from '../components/HeroCard';
import '../styles/CinematicUniverse.css';
import characterManager from '../actions/characterManager';
import mcuController from '../controllers/mcuController';

class CinematicUniverse extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      showSuggest: false,
      suggestions: []
    }
  }

  componentDidMount(){
    if(this.props.mcuCharacters){
      this.setState({ characters: this.props.mcuCharacters });
    }
    else{
      mcuController.getAllCharacters().then(characters => {
        this.props.dispatch(characterManager.updateMcuCharacter(characters));
        this.setState({ characters });
      }).catch(function(err){
        //open dialog box
        console.log(err);
      });
    }
  }

  handleSearch = (event) => {
    if(event.target.value){
      this.setState({ showSuggest: true });
      mcuController.characterSuggest(event.target.value).then(suggestions => {
        if(suggestions){
          this.setState({ suggestions });
        }
      }).catch(err => {
        console.log(err);
      });
    }
    else{
      this.setState({ showSuggest: false });
    }
  }

  selectHero = (id) => {
    this.setState({ showSuggest: false });
    this.props.history.push(`mcu/character/${id}`);
  }

  render(){
    return(
      <div>
        <CommonHeader title='Marvel Cinematic Universe'/>
        <div className='search-container'>
          <TextField type='text' label="Type a character's name" margin='dense' variant='outlined' fullWidth={true}
            onChange={this.handleSearch}
          />
          {this.state.showSuggest && this.state.suggestions.length > 0 &&
            <div className='autosuggest-box'>
              {this.state.suggestions.map((character, key) => {
                return (
                  <React.Fragment key={key}>
                    <p onClick={() => this.selectHero(character.id)}>{ character.name }</p>
                    <Divider />
                  </React.Fragment>
                )
              })}
            </div>
          }
        </div>
        <div className='main-container'>
          <Grid container spacing={24}>
            {this.state.characters.map((character,key) => {
              return(
                <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                  <HeroCard character={character} history={this.props.history}/>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    mcuCharacters: state.mcuReducer.mcuCharacters
  }),
  dispatch => ({ dispatch })
)(CinematicUniverse);
