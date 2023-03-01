import { useState } from "react";

export const useForm = (initialForm = {}) => {


    const [ formState, setFormState ] = useState(initialForm)

    const onInputChange = ({ target }) =>{
        const { name,value } = target;
        console.log(target);
        setFormState({
            ...formState,
            [ name ]:value
        })        
    }

    const onBlur = ({targe})=>{
        
    }

    const onResetForm = ()=>{
        setFormState(initialForm)
    }
    
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
