import React from 'react';
import { uniqueId } from '../../util/utils';
class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setInput(arg,e) {
    e.preventDefault();
    const val = e.target.value;
    this.setState( {[arg]: val} );
  }
  handleSubmit(e) {
    e.preventDefault();
    const step = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false,
      todo_id: this.props.todoId
    };
    this.props.receiveStep(step);
  }
  render() {
    return(
      <div>
        <label>Title:
          <input onChange={this.setInput.bind(this,"title")} value={this.state.title} />
        </label>

        <label>Body:
          <textarea onChange={this.setInput.bind(this,"body")} defaultValue={this.state.body}></textarea>
        </label>
        <button onClick={this.handleSubmit}>Create Step</button>
      </div>
    );
  }
}
export default StepForm;
