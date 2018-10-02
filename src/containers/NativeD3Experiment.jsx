import React from 'react';

//Zooniverse Front-End Monorepo
import { panoptes } from '@zooniverse/panoptes-js';

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
    
    return (
      <div>
        <div>Project Status: {this.state.projectStatus}</div>
      </div>
    );
  } 
}

/*
--------------------------------------------------------------------------------
 */

NativeD3Experiment.defaultProps = {};
NativeD3Experiment.propTypes = {};

export default NativeD3Experiment;
