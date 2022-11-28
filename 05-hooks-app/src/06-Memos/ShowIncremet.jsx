import React from "react";


export const ShowIncremet = React.memo( ({increment}) => {
  console.log('Me volvi a generar =(');
  return (
    <button
      className='btn btn-primary'
      onClick={()=>{increment(3)}}
    >
        Incrementar
    </button>
  )
})
