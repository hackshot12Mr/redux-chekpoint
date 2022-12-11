import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleAdd } from '../redux/actions'


const Addtask = () => {
  const [newAction, setNewAction] = useState("")
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newOne={
            id:Math.random(),action:newAction,isDone:false
        }
        dispatch(handleAdd(newOne))
    }
  return (
    <div>
        <form  onSubmit={handleSubmit} >
            <input type="text" className='input' value={newAction} onChange={e=>setNewAction(e.target.value)}/>
            <button type='submit'  className='add'>Add</button>
        </form>
    </div>
  )
}

export default Addtask