import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/SearchOutlined';
import '../styles/CommonHeader.scss';

class CommonHeader extends Component{

  goHome = (e) => {
    e.preventDefault();
    this.props.history.push(`/mcu`);
  }

  render(){
    return(
      <div className="common_header">
        <AppBar position="fixed">
          <Toolbar className="remove_left_margin">
            <Typography variant="h6" color="inherit" className="logo" onClick={(e) => this.goHome(e)}>
              <center>{ this.props.title }</center>
            </Typography>
            <IconButton
              color="inherit"
              className="search_icon"
              aria-label="Search"
            >
              <SearchIcon className="search_icon"/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default CommonHeader;
