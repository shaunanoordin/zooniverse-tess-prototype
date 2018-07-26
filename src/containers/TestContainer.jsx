import React from 'react';

//Zooniverse Front-End Monorepo
import { panoptes } from '@zooniverse/panoptes-js';
import Classifier from '@zooniverse/classifier';

//Plotly Graph
import Plotly from 'plotly.js-dist';
import createPlotlyComponent from 'react-plotlyjs';
const PlotlyComponent = createPlotlyComponent(Plotly);

class TestContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      projectData: null,
      projectStatus: 'idle',
    }
  }
  
  componentDidMount() {
    this.initialise();
  }
  
  async initialise() {
    const id = '335';
    try {
      this.setState({ projectStatus: 'fetching' });
      const response = await panoptes.get(`/projects/${id}`);
      const project = response.body.projects[0];
      this.setState({ projectData: project, projectStatus: 'success' });
    } catch (error) {
      this.setState({ projectStatus: 'error' });
      console.error(`Error fetching project ${id}`, error);
    }
  }

  render() {
    return (
      <div>
        <PlotlyComponent
          data={[
            {
              type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
              x: [1, 2, 3],     // more about "x": #scatter-x
              y: [6, 2, 3],     // #scatter-y
              marker: {         // marker is an object, valid marker keys: #scatter-marker
                color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color
              }
            },
            {
              type: 'bar',      // all "bar" chart attributes: #bar
              x: [1, 2, 3],     // more about "x": #bar-x
              y: [6, 2, 3],     // #bar-y
              name: 'bar chart example' // #bar-name
            }
          ]}
        />
        
        <div>Project Status: {this.state.projectStatus}</div>
        {(!this.state.projectData) ? null :
          <Classifier project={this.state.projectData} />
        }
      </div>
    );
  } 
}

/*
--------------------------------------------------------------------------------
 */

TestContainer.defaultProps = {};
TestContainer.propTypes = {};

export default TestContainer;
