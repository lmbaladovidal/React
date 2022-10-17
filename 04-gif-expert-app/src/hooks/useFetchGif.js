import { useEffect, useState } from "react";
import { getGif } from "../helpers/GetGifs";

export const useFetchGif = (category) => {
    console.log("Hasta aca fetch");
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async()=>{
        console.log("paso");
        const newImages = await getGif(category);
        console.log("desp del await");
        setImages(newImages)
        setIsLoading(false);
        console.log(newImages)
    }
    useEffect( ()=>{
        getImages();
        },[] )

    return{
        images,
        isLoading
    }
}
