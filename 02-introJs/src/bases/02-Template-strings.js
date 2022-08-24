
console.log("Hola Mundo");
const nombre = "Leandro";
const apellido = "Balado"
let valorDado = 5;
valorDado=4;
if (true){
    let valorDado=6
    const nombre ="Martin"
    const apellido="Vidal"
    console.log("dentro del if",nombre,apellido,valorDado);
}
console.log("fuera del if",nombre,apellido,valorDado);


const nombreCompleto =`${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(parametro){
    return `Hola ${parametro}`
}
console.log(`Este es el texto: ${getSaludo(nombreCompleto)}`)