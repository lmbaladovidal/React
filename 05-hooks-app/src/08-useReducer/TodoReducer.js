
export const todoReducer = (initialState,action)=>{//initialState viene con lo que esta cargado en el todo
    switch (action.type) {
        case '[TODO] Add ToDo':
            return [ ...initialState, action.payload ]
            break;
            case '[TODO] Remove ToDo':              
                return initialState.filter((element)=>{
                                                    return element.id!=action.payload.id
                                                    }
                                        )
                break;
            case '[TODO] Toggle ToDo':
                return initialState.map(todo=>{
                    if(todo.id===action.payload){
                        return {...todo,
                            done: !todo.done
                        }
                    }
                    return todo
                })
                break;    
        default:
            return initialState;
            break;
    }
}