import React,{ useState } from 'react';
import {useDispatch } from 'react-redux'
import { delet,edit,complet } from '../Redux/Actions/todosActions';


const Todo=({todo})=>{
       const dispatch=useDispatch()
       
       const[editt,setEdit ] = useState(todo.edit)  
       const[text,setText]=useState('') 
       const textHandler=(e)=>{          
       setText(e.target.value)  
           }

      const editHandler=()=>{
       dispatch(edit(todo.id,text))    
        setText('')            
        setEdit(false)       
            }
       

       const complt=()=>{
          dispatch(complet(todo.id))
          }

    return (
           <div>
                
             
               <div className="todos">
                <div style={todo.completed ? {textDecoration:"line-through", backgroundColor:"green"}:null}>  {todo.text} </div>
                <div>
                <button onClick={complt}>Done</button>
                <button onClick={()=>dispatch(delet(todo.id))}>Delete</button>
                <button onClick={()=> setEdit(true)}>Edit</button>
                </div>
               </div>
               <div> 
               {(editt===true)?
                <div >
                <input type="text" 
                       onChange={textHandler }
                       />
                <button onClick={editHandler}>Update</button>
                <button onClick={()=> setEdit(false)}>Close</button> 
                </div>
                : null}
                </div>
                
                

           </div>
   
        )}

export default Todo;
