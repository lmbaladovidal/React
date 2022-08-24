const persona = {
    nombre:'Tony',
    edad:45,
    clave:'IronMan'
}

const {nombre,edad,clave} = persona

const usesContext = ({clave, nombre, edad, rango = 'Comandante'})=>{
    console.log(nombre, edad, rango)
    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:14.234,
            lng:45.164
        }
    }
}

console.log(nombre);
console.log(edad);
console.log(clave);
const {nombreClave, anios,latlng:{lat,lng}} = usesContext(persona);
console.log(nombreClave,anios);
console.log(lat,lng);