import {connect} from 'react-redux';
import TodoDetailView from './todo_detail_view';
import {removeTodo, deleteTodo } from '../../actions/todo_actions';
import {receiveSteps} from '../../actions/step_actions';

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todoId) => dispatch(removeTodo(todoId)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  receiveSteps: (steps) => dispatch(receiveSteps(steps))
});

export default connect(null, mapDispatchToProps)(TodoDetailView);
