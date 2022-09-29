import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([ 'Kimetsu no yaiba','My Hero Academy' ]);
  const onAddCategory = (newCategory)=>{
    setCategories([newCategory,...categories]);
  }
  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* input */}
        <AddCategory 
        /* onAddCategory={setCategories} */
        onNewCategory={onAddCategory}
        />
        {/* listado de gif */}
        <ol>          
          {categories.map((category,i)=>{
            return <li key={i}>{category}</li>
          })}
        </ol>
        {/* gif items */}
    </>
  )
}
