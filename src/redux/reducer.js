import { COMPLETE, DELETE } from "./actionTypes"

const init=[
    {
        id:Math.random(),
        action:"Learn CSS",
        isDone:true
    },
    {
        id:Math.random(),
        action:"Learn Redux",
        isDone:false
    }
]

const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case DELETE:
            return state.filter(el=>el.id!==payload)
        
        case COMPLETE:
            return state.map(el=>el.id==payload?{...el,isDone:!el.isDone}:el)
            
    
        default:
            return state
    }
}

export default reducer