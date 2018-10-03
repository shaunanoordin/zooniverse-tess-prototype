import React from 'react';
import PropTypes from 'prop-types';

//Zooniverse Front-End Monorepo
//import { panoptes } from '@zooniverse/panoptes-js';

//Native D3 and a faux-dom
import * as d3 from 'd3';
import * as d3Zoom from 'd3-zoom';
import {withFauxDOM} from 'react-faux-dom';

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
    let testData = [];
    const rY = (x) => {
      return props.height - Math.random() * Math.abs(props.width-x);
    };
    for (let i = 1; i <= props.width; i++) {
      testData.push({
        x: i,
        y: rY(i),
      });
    }
    //--------------------------------
    
    //Genrate the SVG on the faux node
    //--------------------------------
    const fauxNode = this.props.connectFauxDOM('svg', 'chartNode');
    
    const d3Svg = d3.select(fauxNode)
      .attr('viewBox', `0 0 ${props.width} ${props.height}`)
      .attr('class', 'd3-svg')
      .attr('width', props.width)
      .attr('height', props.height)
    ;
    
    const d3DataLayer = d3Svg.append('g')
      .attr('class', 'data-layer')
    ;
  
    d3DataLayer.selectAll('circle')
      .data(testData)
      .enter()
        .append('circle')
        .attr('class', 'data-point')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', (d) => 1)
    ;
    
    const d3InterfaceLayer = d3Svg.append('rect')
      .attr('class', 'interface-layer')
      .attr('width', props.width)
      .attr('height', props.height)
      .style('fill', 'none')
      .style('pointer-events', 'all')
    ;
    
    //TODO: now what is this for?
    //this.props.animateFauxDOM(800);
    //--------------------------------
  }

  render() {
    const props = this.props;
    const state = this.state;
    
    return (
      <div className="native-d3-chart">
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
  width: 500,
  height: 500,
};

NativeD3Experiment.propTypes = {
  //TODO
};

export default withFauxDOM(NativeD3Experiment);
