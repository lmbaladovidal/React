import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";
//import { getGif } from "../helpers/GetGifs";
export const GifGrid = ({ category }) => {

    const { images,isLoading } = useFetchGif(category) 
    console.log( isLoading )

  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && ( <h2>Cargando...</h2> )
        }
        <div className="card-grid">
            {images.map((image)=>(
                    <GifItem 
                        key={ image.id } 
                        {...image}
                    />
                ))}
        </div>
        
    </>
  )
}
