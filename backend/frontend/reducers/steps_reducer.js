import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from "../actions/step_actions";
import merge from "lodash/merge";
const initialState = {
  1: { // this is the step with id = 1
    id: 1,
    title: 'walk to store',
    done: false,
    todo_id: 1
  },
  2: { // this is the step with id = 2
    id: 2,
    title: 'buy soap',
    done: false,
    todo_id: 1
  }
};

const stepsReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_STEPS:
      const steps = {};
      action.steps.forEach(step => {
        steps[step.id] = step;
      });
      return steps;
    case RECEIVE_STEP:
      let nextState = merge({}, state);
      nextState[action.step.id] = action.step;
      return nextState;
    case REMOVE_STEP:
      let newState = merge({}, state);
      delete newState[action.step.id];
      return newState;
    default:
      return state;
  }
};

export default stepsReducer;
