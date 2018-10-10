import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import { ZooniverseLogo } from 'zooniverse-react-components';

import AuthContainer from '../containers/AuthContainer';
import KitchenSinkExperiment from '../containers/KitchenSinkExperiment';
import NativeD3Experiment from '../containers/NativeD3Experiment';
import VictoryExperiment from '../containers/VictoryExperiment';

export default function App() {
  return (
    <div>
      <header className="site-header">
        <Link to="/" className="link"><h1 className="title">Zooniverse</h1></Link>
        <Link to="/victory" className="link">Victory (v3)</Link>
        <Link to="/native-d3" className="link">Native D3 (v2)</Link>
        <Link to="/kitchen-sink" className="link">Kitchen Sink (v1)</Link>
        <AuthContainer />
        <ZooniverseLogo />
      </header>
      <section className="content-section">
        <Switch>
          <Route path="/victory" component={VictoryExperiment} />
          <Route path="/native-d3" component={NativeD3Experiment} />
          <Route path="/kitchen-sink" component={KitchenSinkExperiment} />
        </Switch>
      </section>
    </div>
  );
}

