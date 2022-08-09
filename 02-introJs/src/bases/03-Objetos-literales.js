const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        localidad:'New York',
        calle:'la quinta avenida',
        nro:123
    }
};

console.log('Soy persona: ',persona);
const persona2 = persona;
const persona3 = {...persona}
persona2.nombre = "Peter";
persona3.nombre = "Bruce";
console.log('Soy persona: ',persona);
console.log('Soy persona2: ',persona2);
console.log('Soy persona3: ',persona3);