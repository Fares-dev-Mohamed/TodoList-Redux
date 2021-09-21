

const initialState = {
    todos: [],
    filter:"All",
    filtredTodos: []
   
}
  
 
  export  const todosReducer=(state = initialState, action)=> {
    
    
    switch (action.type) {
        case "ADD":
           return {...state,todos:[...state.todos,action.payload]}
        case "DELET":
           return {...state, todos: state.todos.filter(el=> el.id !== action.payload)}
        case  "EDIT":
          return {...state,
                     todos:state.todos.map(el=> el.id=== action.payload.ID? {...el,text: action.payload.textEdited}:el )} 
        case  "COMPLET": 
          return {...state,
                     todos: state.todos.map(el=>el.id===action.payload? {...el,completed:!el.completed}:el )}  
        
        case "FILTER": 
        return {
          ...state,
          filter:action.payload.status
                }
        
        case "FILTREDTODOS":
          return{
            ...state,
            filtredTodos: state.filter==="Done"? state.todos.filter(el=>el.completed===true):
                          state.filter==="toBeDone"? state.todos.filter(el=>el.completed===false):
                          state.filter==="All"?state.todos:null
          } 

          default:
            return state
        }}