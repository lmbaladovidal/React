const personajes = ['Goku','Vegeta','Trunks'];
const [,p2,p3] = personajes;

console.log(p2);
console.log(p3);

const retornaArreglo = ()=>{
    return ['ABC',123];
}

const [letras,numeros] = retornaArreglo();
console.log(letras,numeros);

const usesState = (valor)=>{
    return [valor,()=>{console.log('Hola Mundo')}];
}

const [nombre,setNombre] = usesState('Goku');
console.log(nombre);
setNombre();