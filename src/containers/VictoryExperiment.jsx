/*
Victory Experiment
------------------

The is an experiment to create the Light Curve Viewer component using Victory.
- https://github.com/FormidableLabs/victory
- https://formidable.com/open-source/victory/about/

So far, this works for victory 0.27.2 but fails on 30.5.0 due to a weird error
with victory's common-props dependency.

--------------------------------------------------------------------------------
*/

import React from 'react';
import PropTypes from 'prop-types';

//Import VICTORY! components
import { render } from 'react-dom';
import { VictoryChart, VictoryTheme, VictoryScatter } from 'victory';

class VictoryExperiment extends React.Component {
  constructor() {
    super()
  }
  
  componentDidMount() {
    this.initialise();
  }
  
  initialise() {
    const props = this.props;
    const state = this.state;
    
  }

  render() {
    const props = this.props;
    const state = this.state;
    
    return (
      <div className="victory-chart">
        <VictoryChart
          theme={VictoryTheme.material}
          domain={{ x: [0, 5], y: [0, 7] }}
        >
          <VictoryScatter
            style={{ data: { fill: "#c43a31" } }}
            size={7}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 }
            ]}
          />
        </VictoryChart>
      </div>
    );
  }
}

/*
--------------------------------------------------------------------------------
 */

VictoryExperiment.defaultProps = {
};

VictoryExperiment.propTypes = {
};

export default VictoryExperiment;
