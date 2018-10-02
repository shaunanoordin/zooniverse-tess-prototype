import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import { ZooniverseLogo } from 'zooniverse-react-components';

import AuthContainer from '../containers/AuthContainer';
import AboutLayout from './about';
import TestContainer from '../containers/TestContainer';

export default function App() {
  return (
    <div>
      <header className="site-header">
        <Link to="/" className="link"><h1 className="title">Zooniverse</h1></Link>
        <Link to="/about" className="link">About</Link>
        <AuthContainer />
        <ZooniverseLogo />
      </header>
      <section className="content-section">
        <Switch>
          <Route path="/test" component={TestContainer} />
          <Route path="/about" component={AboutLayout} />
        </Switch>
      </section>
    </div>
  );
}

