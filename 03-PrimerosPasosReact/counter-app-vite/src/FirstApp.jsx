import PropTypes from 'prop-types'
const newMessage = 'Leandro';

function getObj(){
    return {Nombre:"Leandro",
            Apellido:"Balado Vidal"}
}

export const FirstApp = ({title, subtitle,counter}) => {
    console.log(title)
  return (
    <>
        {/* <h1>Hola{newMessage}</h1> */}
        <h1>{title}</h1>
        <h4>{counter +1}</h4>
        <code>{JSON.stringify(getObj())}</code>
        <p>{subtitle}</p>
    </>
  )
}

FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.string,
    counter : PropTypes.number
};

FirstApp.defaultProps = {
    title : "No Hay titulo",
    subtitle : "No Hay subtitulo"
}
