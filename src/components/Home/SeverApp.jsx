import React from 'react';
//router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import FooterComponent from './FooterComponent';
import EntrancePage from './EntrancePage';
import AboutUs from './../AboutUs/AboutUs';
import ScrollButton from './ScrollButton';
const SeverApp = () => {
  const a = { b: 1, c: { d: 2 } };
  const e = { ...a };

  e.c.d = 3;

  console.log(a.c.d);
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
