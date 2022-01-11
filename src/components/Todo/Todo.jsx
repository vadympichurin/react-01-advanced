import React from "react";

import IconButton from "../IconButton/IconButton";
import { ReactComponent as DeleteIcon } from "../../static/icons/delete.svg";

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={completed} 
        onChange={onToggleCompleted} 
      />
      <p className="TodoList__text">{text}</p>
      <IconButton 
        onClick={onDelete}
      >
        <DeleteIcon fill="#fff" height="32" width="32"/>
      </IconButton>
    </div>
  );
};

export default Todo;
