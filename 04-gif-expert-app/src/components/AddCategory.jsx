import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange=(event)=>{
        setInputValue(event.target.value)
    }
    const onSubmit = (event)=>{
        event.preventDefault();
        const newInputValue = inputValue.trim() 
        if (newInputValue==0) return;
        onNewCategory(newInputValue);
        setInputValue('');

    }
  return (
    <form onSubmit = { onSubmit}>
        <input  type="text"  value={inputValue } onChange={ onInputChange }/>
    </form>
  )
}

AddCategory.propTypes= {
  onNewCategory: PropTypes.func.isRequired
}
