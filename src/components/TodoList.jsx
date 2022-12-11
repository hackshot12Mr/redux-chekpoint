import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const {todos} = useSelector(state=>state);

  return (
    <div>
      {todos.map((el,i) => (<Todo task={el} key={el.id} />))}
    </div>
  );
};

export default TodoList;
