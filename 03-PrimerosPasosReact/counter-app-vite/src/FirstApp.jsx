import PropTypes from 'prop-types'
const newMessage = 'Leandro';

function getObj(){
    return {Nombre:"Leandro",
            Apellido:"Balado Vidal"}
}

export const FirstApp = ({title, subtitle,name}) => {
  console.log(title)
  return (
    <>
        <h1 data-testid="test-title">{title}</h1>
        {/* <code>{JSON.stringify(getObj())}</code> */}
        <p>{subtitle}</p>
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
    name :"Leandro Martin",
    //title : "No Hay titulo",
    subtitle : "No Hay subtitulo"
}
