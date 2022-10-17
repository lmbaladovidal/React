
export const getGif = async (category)=>{
    const url = `https:\\api.giphy.com/v1/gifs/search?api_key=bEUUZZaV0Fo0vFbeovGFgOOLL5jyFCeY&q=${ category }&limit=10`;
    console.log("Dentro del getGig");
    console.log(url)
    const response = await fetch(url);
    console.log("Dentro del getGig2");
    console.log(response)
    const { data } = await response.json();
    console.log("Dentro del getGig3");
    const gif = data.map(img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized.url
    }))
    return gif;
}