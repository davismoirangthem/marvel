import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CommonHeader from '../components/CommonHeader';
import McuHeroesList from '../components/McuHeroesList';
import McuAddHero from '../components/McuAddHero';
import '../styles/Dashboard.css';

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
});

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      tabIndex: 1
    }
  }

  changeTab = (event, value) => {
    this.setState({ tabIndex: value });
  };

  handleChangeTab = (index) => {
   this.setState({ tabIndex: index });
  };

  render(){
    return(
      <React.Fragment>
        <CommonHeader title='Admin' />
        <div className='dashboard-container'>
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.tabIndex}
              onChange={this.changeTab}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="All Heroes" />
              <Tab label="Add Hero" />
            </Tabs>
          </AppBar>
          <SwipeableViews
            index={this.state.tabIndex}
            onChangeIndex={this.handleChangeTab}
          >
          <McuHeroesList />
          <McuAddHero />
        </SwipeableViews>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Dashboard);
