import React from "react";
import { useDispatch } from "react-redux";
import {  handleDel, handleComplete } from "../redux/actions";
import Edit from "./Edit";

  const Todo = ({task}) => {
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{task.action}</h1>
        <button onClick={()=>dispatch( handleDel(task.id))} className="delete">Delete</button>
        <button onClick={()=>dispatch(handleComplete(task.id))} className="complete">{task.isDone?"Undo":"Complete"}</button>
        <Edit task={task}/>
    </div>
  )
}


export default Todo;
