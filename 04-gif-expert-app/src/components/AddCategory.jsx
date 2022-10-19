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
        setInputValue('');
        onNewCategory(newInputValue);

    }
  return (
    <form onSubmit = { onSubmit} aria-label="form">
        <input  type="text"  value={inputValue } onChange={ onInputChange }/>
    </form>
  )
}

AddCategory.propTypes= {
  onNewCategory: PropTypes.func.isRequired
}
