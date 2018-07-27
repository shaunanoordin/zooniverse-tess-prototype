import React from 'react';

//Zooniverse Front-End Monorepo
import { panoptes } from '@zooniverse/panoptes-js';
import Classifier from '@zooniverse/classifier';

//Plotly Graph
//https://www.npmjs.com/package/plotly.js-dist, https://github.com/plotly/plotly.js, https://plot.ly/javascript/
//https://www.npmjs.com/package/react-plotlyjs
import Plotly from 'plotly.js-dist';
import createPlotlyComponent from 'react-plotlyjs';
const PlotlyComponent = createPlotlyComponent(Plotly);

//D3.js Graph
//https://www.npmjs.com/package/react-d3
//http://esbullington.github.io/react-d3-website/
import { ScatterChart } from 'react-d3/scatterchart';

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
    const r = (n=100)=>{ return Math.floor(Math.random()*n) }
    
    return (
      <div>
        <PlotlyComponent
          data={[
            {
              type: 'scatter',
              mode: 'markers',
              x: (()=>{ let xs=[]; for(let i=0;i<100;i++) xs.push(r()); return xs })(),
              y: (()=>{ let ys=[]; for(let i=0;i<100;i++) ys.push(r()); return ys })(),
              marker: {
                color: 'rgb(32, 128, 128)',
                symbol: 'star-diamond'
              }
            },
          ]}
        />
        
        <ScatterChart
          data={[
            {
              name: "series1",
              values: (()=>{
                let vals = []
                for (let i = 0; i < 100; i++) {
                  vals.push({ x: r(), y: r() })
                }
                return vals
              })()
            }
          ]}
          width={600}
          height={400}
          yHideOrigin={false}
          title="Scatter Chart"
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
