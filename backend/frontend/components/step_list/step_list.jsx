import React from "react";
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form'
const StepList = ({ steps, todoId, receiveStep }) => {
  return (
    <div>
      <ul>
        {
          steps.map(step => <StepListItemContainer key={step.id} step={step}/>)
        }
      </ul>
      <StepForm  todoId={todoId} receiveStep={receiveStep}/>
    </div>
  );
};

export default StepList;
