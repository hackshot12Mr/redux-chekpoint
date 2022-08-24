import React from "react";
import { useDispatch } from "react-redux";
import { del } from "../redux/actions";

const Todo = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{task.action} </h1>
      <button onClick={() => dispatch(del(task.id))}>delete</button>
    </div>
  );
};

export default Todo;
