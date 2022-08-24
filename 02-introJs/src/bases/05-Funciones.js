
const saludar =function(nombre){
    return `Hola, ${nombre}!`;
}

const saludar2 =(nombre)=>{
    return `Hola, ${nombre}!`;
}

const saludar3 =(nombre)=>`Hola, ${nombre}!`;

const saludar4 =(nombre)=>({
                            saludo:`Hola, ${nombre}!`,
                            despedida:`Chau, ${nombre}!`,
                        })

const getUsuarioActivo = (nombre)=>({
        uid:'ABC567',
        userName:nombre,
})

const usuarioActivo = getUsuarioActivo("Gotenks");

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Picolo'));
console.log(saludar4('Gohan').saludo);
console.log(saludar4('Gohan').despedida);
console.log(usuarioActivo);