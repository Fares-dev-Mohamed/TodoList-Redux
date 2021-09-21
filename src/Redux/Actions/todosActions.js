import {ADD,DELET,EDIT,FILTER,FILTREDTODOS} from '../Constants/actionTypes'

export const add =(newTodo)=>{
    return {
        type:"ADD",
        payload:newTodo
    }
}
export const delet =(ID)=>{
    return {
        type:"DELET",
        payload:ID
    }
}
export const edit =(ID,textEdited)=>{
    return {
        type:"EDIT",
        payload:{ID,textEdited}
    }
}
 
export const filter =(status)=>{
    return {
        type:"FILTER",
        payload:{status}

    }
}

export const filterHandler =()=>{
          return {
              type:'FILTREDTODOS'
           
          }
      }
      export const complet =(ID)=>{
        return {
            type:'COMPLET',
            payload:ID
          
        }
    }