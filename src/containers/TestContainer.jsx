import React from 'react';
import { panoptes } from '@zooniverse/panoptes-js';
import Classifier from '@zooniverse/classifier';

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
      console.log('+++ PROJECT RECEIVED');
    } catch (error) {
      this.setState({ projectStatus: 'error' });
      console.error(`Error fetching project ${id}`, error);
    }
  }

  render() {
    console.log('+++ RENDER');
    return (
      <div>
        <div>Project Status: {this.state.projectStatus}</div>
        <Classifier />
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
