import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  About, Business, FAQ, Home, Contact, Onboard, Confirmation, Resources, PrivacyPolicy, ForBusinesses
} from './scenes';

const Routes = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/faq">
      <FAQ />
    </Route>
    <Route path="/contact">
      <Contact />
    </Route>
    <Route path="/onboard/:id?" component={Onboard} />
    <Route path="/confirmation">
      <Confirmation />
    </Route>
    <Route path="/payment/confirm">
      <Confirmation />
    </Route>
    <Route path="/business-resources">
      <Resources />
    </Route>
    <Route path="/for-businesses">
      <ForBusinesses />
    </Route>
    <Route path="/privacy-policy" component={PrivacyPolicy} />
    <Route path="/businesses/:id" component={Business} />
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
