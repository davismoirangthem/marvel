import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommonHeader from '../components/CommonHeader';
import CommonFooter from '../components/CommonFooter';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import HeroCard from '../components/HeroCard';
import characterManager from '../actions/characterManager';
import mcuController from '../controllers/mcuController';
import { isMobile } from '../helpers/Generic';
import '../styles/CinematicUniverse.scss';

let allChar = [], mostSearched = [], totalChar = [];
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

  randomize = () => {
    if(allChar.length === 0){
      allChar = this.state.characters;
      if(mostSearched.length === 0)
        mostSearched = allChar
          .map((a) => ({sort: Math.random(), value: a}))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value)
          .splice(0,4);
      if(totalChar.length === 0)
        totalChar = allChar.sort((a, b) => a.name.localeCompare(b.name))
    }
  }

  selectHero = (id) => {
    this.setState({ showSuggest: false });
    this.props.history.push(`mcu/character/${id}`);
  }

  render(){
    this.randomize();
    return(
      <div>
        <CommonHeader title='Marvel Cinematic Universe' history={this.props.history} pageType="HOME"/>
        <div className='search-container' id="search-container">
          <div className="autosuggest_container">
          <h1 className="welcome-tag">Welcome to <br className="mobile-break"/>Marvel Cinematic Universe</h1>
            <input type='text' placeholder="Search character like Iron man, Ant man.."
              onChange={this.handleSearch}
            />
            {this.state.showSuggest && this.state.suggestions.length > 0 &&
              <ul className='autosuggest-box'>
                {this.state.suggestions.map((character, key) => {
                  return (
                    <React.Fragment key={key}>
                      <li onClick={(e) => this.selectHero(character.id)}>{ character.name }</li>
                      <Divider />
                    </React.Fragment>
                  )
                })}
              </ul>
            }
          </div>
        </div>

        <div className="position_relative">
          <div className='main-container most_searched_container'>
          <h2 className="welcome-tag featured_char_text">Most Searched</h2>
            <Grid container spacing={8}>
              {mostSearched.map((character,key) => {
                return(
                  <Grid item xs={6} sm={6} md={4} lg={3} key={key} >
                    <HeroCard character={character} history={this.props.history}/>
                  </Grid>
                )
              })}
            </Grid>
          </div>

          <div className='main-container'>
          <h2 className="welcome-tag featured_char_text">All Characters</h2>
            <Grid container spacing={8}>
              {totalChar.map((character,key) => {
                return(
                  <Grid item xs={6} sm={6} md={4} lg={2} key={key} >
                    <HeroCard character={character} history={this.props.history}/>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        </div>
        <CommonFooter />
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
