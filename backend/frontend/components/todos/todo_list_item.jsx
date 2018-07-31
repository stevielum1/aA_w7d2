import React from "react";
import merge from 'lodash/merge';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: false
    };
    this.updateDone = this.updateDone.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
  }

  changeDetail() {
    const newDetail = !this.state.detail;
    this.setState( {detail: newDetail} );
  }

  updateDone(todo) {
    let newToDo = merge({},todo);
    newToDo.done = !newToDo.done;
    this.props.updateTodo(newToDo);
  }

  doneText(status) {
    return status === true ? "Undo" : "Done";
  }

  render() {
    const {todo, removeTodo, receiveTodo} = this.props;

    let detailView = "";
    if (this.state.detail) {
      detailView = <TodoDetailViewContainer todo={todo}/>;
    }
    return (
      <div>

        <li>
          <h1 onClick={this.changeDetail}>Title: {todo.title}</h1>
          {detailView}
        </li>
        <button onClick={()=>this.updateDone(todo)}>{this.doneText(todo.done)}</button>
      </div>
    );
  }
}

export default TodoListItem;
