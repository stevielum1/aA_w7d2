import React from "react";
import TodoListItem from "./todo_list_item";
import TodoForm from './todo_form';
class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const { todos, receiveTodo, removeTodo, createTodo, errors, clearErrors, updateTodo } = this.props;
    return(
      <div>
        <ul>
          {
            todos.map( (todo) => {
              return <TodoListItem key={todo.id} updateTodo={updateTodo} removeTodo={removeTodo} todo={todo}/>;
            })
          }
        </ul>
        <TodoForm createTodo={createTodo} errors={errors} clearErrors={clearErrors}/>
      </div>

    );
  }
}


export default TodoList;
