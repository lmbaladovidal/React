export const todoReducer = (initialState,action)=>{
    switch (action.type) {
        case 'ABC':
            throw new error ('Action.type=ABC no esta implementado');
            break;
    
        default:
            return initialState;
            break;
    }
}