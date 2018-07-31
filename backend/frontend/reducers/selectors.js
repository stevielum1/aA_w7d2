export const allTodos = (state) => Object.keys(state.todos).map(todoId => state.todos[todoId]);

export const stepsByTodoId = (state, todoId) => {
  return Object.keys(state.steps)
    .filter(stepId => {
      return state.steps[stepId].todo_id === todoId;
    }).map(stepId => {
      return state.steps[stepId];
    });
};
