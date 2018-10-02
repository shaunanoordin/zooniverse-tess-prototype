import React from 'react';

//Zooniverse Front-End Monorepo
//import { panoptes } from '@zooniverse/panoptes-js';

//Native D3 and a faux-dom
import * as d3 from 'd3'
import {withFauxDOM} from 'react-faux-dom'

class NativeD3Experiment extends React.Component {
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
  
  initialise() {
    const props = this.props;
    const state = this.state;
    
    //Generate test data
    //--------------------------------
    const r = (n = 100) => { return Math.floor(Math.random()*n) }
    const t = (x) => {
      return '' +
        ' ten twenty thirty forty fifty sixty seventy eighty ninety hundred ???'.split(' ')[Math.floor(x/10)] + ' ' +
        ' one two three four five six seven eight nine ???'.split(' ')[Math.floor(x%10)];
    };
    let testData = [];
    for (let i = 1; i <= 100; i++) {
      testData.push({
        x: i,
        y: r(),
        label: t(i),
      });
    }
    //--------------------------------
    
    //Genrate the faux node
    //--------------------------------
    const fauxNode = this.props.connectFauxDOM('svg', 'chartNode')
    const dataLayer = d3.select(fauxNode)
      .attr('width', props.width)
      .attr('height', props.height)
      .attr('class', 'd3-chart')
        .append('g')
        .attr('class', 'data-layer');
  
    dataLayer.selectAll('circle')
      .data(testData)
      .enter()
        .append('circle')
        .attr('class', 'data-point')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', (d) => 1)
    ;
    
    
    this.props.animateFauxDOM(800);
    //--------------------------------
  }

  render() {
    const props = this.props;
    const state = this.state;
    
    return (
      <div className="d3-chart">
        {props.chartNode}
      </div>
    );
  } 
}

/*
--------------------------------------------------------------------------------
 */

NativeD3Experiment.defaultProps = {
  chartNode: 'Loading...',
  width: 200,
  height: 200,
};

NativeD3Experiment.propTypes = {
  //TODO
};

export default withFauxDOM(NativeD3Experiment);
