import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import Layout from '../components/Layout';

import Home from './home';
import Notes from './notes';
import Favorites from './favorites';
import Note from './note';
import SignUp from './signup';
import SignIn from './signin';
import NewNote from './new';

const Routes = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/notes" component={Notes} />
      <PrivateRoute path="/favorites" component={Favorites} />
      <Route path="/note/:id" component={Note} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <PrivateRoute path="/new" component={NewNote} />
    </Layout>
  </Router>
);

export default Routes;
