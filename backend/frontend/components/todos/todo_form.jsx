import React from 'react';
import { uniqueId } from '../../util/utils';

class TodoForm extends React.Component {
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
    const todo = {
      title: this.state.title,
      body: this.state.body
    };
    this.props.createTodo(todo).then(
      () => {
        this.setState({title: '', body: ''});
        this.props.clearErrors();
      }
    );
  }

  render() {
    let todo = {
      id: uniqueId(),
      title: this.state.title,
      body: this.state.body
    };
    return (
      <div>
        <p>{this.props.errors}</p>

        <label>Title:
          <input onChange={this.setInput.bind(this,"title")} value={this.state.title} />
        </label>

        <label>Body:
          <textarea onChange={this.setInput.bind(this,"body")} defaultValue={this.state.body}></textarea>
        </label>

        <button onClick={this.handleSubmit}>Create Todo!</button>
      </div>
    );
  }
}

export default TodoForm;
