import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/SearchOutlined';
import mcuController from '../controllers/mcuController';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { isMobile } from '../helpers/Generic';
import MobileSearch from './MobileSearch';
import '../styles/CommonHeader.scss';

class CommonHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      showSuggest: false,
      suggestions: [],
      scrollingPage: false,
      openSearchModal: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    if (window.scrollY === 0 && this.state.scrollingPage === true) {
        this.setState({ scrollingPage: false });
    }
    else if(window.scrollY > 50 && this.state.scrollingPage !== true) {
        this.setState({ scrollingPage: true });
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
    let input = document.getElementById('hero-input');
      if(input){
          input.value = '';
      }
    this.setState({ showSuggest: false });
    this.props.history.push(`/mcu/character/${id}`);
  }

  goHome = (e) => {
    e.preventDefault();
    this.props.history.push(`/mcu`);
  }

  openSearch = () => {
    this.setState({ openSearchModal : true });
  }

  closeSearch = () => {
    this.setState({ openSearchModal : false });
  }

  render(){
    return(
      <div className="common_header">
        <AppBar position="fixed" className={`${this.state.scrollingPage ? 'elevation' : ''}`}>
          <Toolbar className="remove_left_margin">
            <span>
            {this.props.pageType === "DESC" &&
              <IconButton className="back-btn" color="inherit" onClick={() => this.props.history.push(`/mcu`)} aria-label="Close">
                <ArrowBack />
              </IconButton>
            }
            <Typography variant="h6" color="inherit" className="logo" onClick={(e) => this.goHome(e)}>
              <center>{ this.props.title }</center>
            </Typography>
          </span>
            {isMobile() ? (
            <IconButton
              color="inherit"
              className="search_icon"
              aria-label="Search"
              onClick={() => this.openSearch()}
            >
              <SearchIcon className="search_icon"/>
            </IconButton>
            ) : (
              <div className="header_search_container">
                <div className="header_autosuggest_container">
                  <input type='text' id="hero-input" placeholder="Search character like Iron man, Ant man.."
                    onChange={this.handleSearch}
                  />
                    {this.state.showSuggest && this.state.suggestions.length > 0 &&
                      <ul className='search_autosuggest-box'>
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
            )}
          </Toolbar>
        </AppBar>
        <MobileSearch
          open={this.state.openSearchModal}
          handleClose={this.closeSearch}
          handleSearch={this.handleSearch}
          suggestions={this.state.suggestions}
          showSuggest={this.state.showSuggest}
          selectHero={this.selectHero}
        />
      </div>
    );
  }
}

export default CommonHeader;
