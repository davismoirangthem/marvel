import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import CinematicUniverse from './views/CinematicUniverse';
import McuHeroDescription from './views/McuHeroDescription';
import Dashboard from './views/Dashboard';

class Routes extends Component{
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/mcu" exact component={CinematicUniverse} />
          <Route path="/mcu/character/:id" exact component={McuHeroDescription} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
