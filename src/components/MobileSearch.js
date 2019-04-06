import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import '../styles/MobileSearch.scss';

function Transition(props) {
  return <Slide direction="left" {...props} />;
}

class MobileSearch extends React.Component {
  onSelectHero = (id) => {
    this.props.handleClose();
    this.props.selectHero(id);
  }
  render() {
    return (
        <Dialog
          fullScreen
          open={this.props.open}
          onClose={this.props.handleClose}
          TransitionComponent={Transition}
        >
          <div className="mobile_search_container">
          <AppBar>
            <Toolbar className="search_bar_holder">
              <IconButton color="inherit" onClick={this.props.handleClose} aria-label="Back">
                <ArrowBack />
              </IconButton>
                <input type="text" autoFocus placeholder="Search for characters" onChange={this.props.handleSearch}/>
                <IconButton color="inherit" onClick={this.props.handleClose} aria-label="Close">
                  <CloseIcon />
                </IconButton>
            </Toolbar>
          </AppBar>
          {this.props.showSuggest && this.props.suggestions.length > 0 &&
          <List>
          {this.props.suggestions.map((character, key) => {
            return (
              <React.Fragment key={key}>
                <ListItem button onClick={(e) => this.onSelectHero(character.id)}>
                  <ListItemText primary={character.name} />
                </ListItem>
                <Divider />
              </React.Fragment>)
          })}
          </List>
          }
          </div>
        </Dialog>
    );
  }
}

export default MobileSearch;
