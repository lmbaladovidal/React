
export const getGif = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bEUUZZaV0Fo0vFbeovGFgOOLL5jyFCeY&q=${ category }&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gif = data.map(img=>({
        id:img.id,
        title:img.title,
        url:img.images.downsized.url
    }))
    return gif;
}