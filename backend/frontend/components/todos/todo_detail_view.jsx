import React from 'react';
import StepListContainer from '../step_list/step_list_container'

const TodoDetailView = ({deleteTodo, todo}) => {

  return(<ul>
    <li>Body: {todo.body}
      <StepListContainer todo={todo} />
      <button onClick={()=>deleteTodo(todo)}>Delete</button>
    </li>
  </ul>);
};

export default TodoDetailView;
