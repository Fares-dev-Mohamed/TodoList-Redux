import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import {filterHandler} from '../Redux/Actions/todosActions';
import Todo from'./Todo';


const TodoList=()=>{
      const dispatch=useDispatch()
      const todos = useSelector(state => state.todos)
      const filtredTodos=useSelector(state=>state.filtredTodos) 
      const filtereType=useSelector(state=>state.filter) 
      useEffect(()=>{
            dispatch(filterHandler())
      },[filtereType,todos])    
    
    return (
           <div calssName="list">
           <ul >
                 {filtredTodos.map((el)=>(
                 <Todo key={el.id} todo={el}  />
                   ) ) }
             </ul>
           </div>
   
        )}
export default TodoList;