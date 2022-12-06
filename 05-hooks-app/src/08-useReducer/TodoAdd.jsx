import {useForm} from '../hooks/useForm'

export const TodoAdd = ({onNewToDo}) => {

    const {description,onInputChange,onResetForm} = useForm({description:''})
    const onFormSubmit = (event)=>{
                            event.preventDefault();
                            if(description.length==0) return
                            const newTodo = {
                                id: new Date().getTime(),
                                description: description,
                                done:false
                            }
                            onNewToDo(newTodo);
                            onResetForm();
                        }
  return (
    
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                value={description}
                name={'description'}
                onChange={onInputChange}>
            </input>
            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>

  )
}
