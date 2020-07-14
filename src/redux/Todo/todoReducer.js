import {ADD_TODO,DELETE_TODO,EDIT_TODO} from './Todotype';

const initialState = {
    list : ['hallo'],
    value:''
}

const todoReducer = (state=initialState, action) => {

    switch(action.type){

        case ADD_TODO : 
        const value = action.value
          let list = [...state.list];
          list.push(value);
        return {
            ...state,
            list:list,
        }

        case DELETE_TODO : 
       const newList = state.list.filter((todo) =>
        todo !== state.list[action.id]);
       return {
           ...state,
           list : newList
       }
       
       case  EDIT_TODO :       
            // const selectedItem = state.list.find((item) => 
            //       item === state.list[action.id] );
                  
                
            
                
        
        
            default : return state
    }
}

export default todoReducer