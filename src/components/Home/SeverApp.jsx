import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import FooterComponent from './FooterComponent';
import EntrancePage from './EntrancePage';
import AboutUs from './../AboutUs/AboutUs';
import ScrollButton from './ScrollButton';
const SeverApp = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <EntrancePage />
        </Route>
      </Switch>
      <AboutUs />
      <FooterComponent />
    </Router>
  );
};

export default SeverApp;
