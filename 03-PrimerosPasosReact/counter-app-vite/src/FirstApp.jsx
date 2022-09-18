const newMessage = 'Leandro';

function getObj(){
    return {Nombre:"Leandro",
            Apellido:"Balado Vidal"}
}

export const FirstApp = () => {
  return (
    <>
        <h1>Hola{newMessage}</h1>
        <code>{JSON.stringify(getObj())}</code>
        <p>Soy Un Subtitulo</p>
    </>
  )
}
