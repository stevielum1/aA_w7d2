import React from 'react';
import merge from 'lodash/merge';

class StepListItem extends React.Component {
  constructor(props){
    super(props);
    this.toggleDone = this.toggleDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleDone(e) {
    e.preventDefault();
    let newStep = merge({}, this.props.step);
    newStep.done = !newStep.done;
    this.props.receiveStep(newStep);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeStep(this.props.step);
  }

  render() {
    const { removeStep, receiveStep, step } = this.props;
    return (
      <li>
        <h1>{step.title}</h1>
        <p>{step.body}</p>
        <button onClick={this.toggleDone}>Done</button>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

export default StepListItem;
