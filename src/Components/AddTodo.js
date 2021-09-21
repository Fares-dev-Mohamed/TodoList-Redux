import React,{useState} from 'react';
import {useDispatch } from 'react-redux'
import {add,filter} from '../Redux/Actions/todosActions'


const AddTodo=()=>{
      const[text,setText]=useState("")
      const textHandler=(e)=>{
          setText(e.target.value)  
      }
      const dispatch = useDispatch()

    
    
    const Add=()=>{
        dispatch( add({id:Math.random(), text, completed:false, edit:false}))
          setText("")
    }

    const statusHandler=(e)=>{
        dispatch (filter(e.target.value))  
    }

    
    return (
           <div className="add">
              <div >
              <input 
                     type="text"
                     value={text}
                     onChange={textHandler}               
                     placeholder="done"
                     
               />
               <button  onClick={Add}>Add</button>
              </div>
              <div >
              <select onChange={statusHandler} name="todos" >
                  <option value="All">All</option>
                  <option value="Done">Done</option>
                  <option value="toBeDone">To be done</option>
  
               </select>
              </div>
              
           </div>
   
        )}

export default AddTodo;