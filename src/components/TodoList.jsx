import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const state = useSelector((state) => state);

  return (
    <div>
      {state.map((el) => (
        <Todo task={el} key={el.id} />
      ))}
    </div>
  );
};

export default TodoList;
