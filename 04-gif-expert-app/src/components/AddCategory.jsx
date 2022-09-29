import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange=(event)=>{
        console.log(event.target.value);
        setInputValue(event.target.value)
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        const newInputValue = inputValue.trim() 
        if (newInputValue==0) return;
        /* onAddCategory( categories=>[ inputValue,...categories ]); */
        onNewCategory(newInputValue);
        setInputValue('');

    }
  return (
    <form onSubmit = { onSubmit}>
        <input type="text" value={inputValue } onChange={ onInputChange }/>
    </form>
  )
}
