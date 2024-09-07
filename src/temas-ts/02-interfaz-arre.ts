
interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    curso:string;
    direccion?:string;
}


const alumno:Alumno={
    nombre: "juan",
    apellido: "lopez",
    edad: 22,
    curso: "ingles",
}

console.table(alumno)


let mascotas=['perro','gato','perico']
mascotas[1]='nuevo gato';
mascotas.push('hamster');
console.log(mascotas)


let tem:(number|string)[]=[]
tem.push(1);
tem.push('dos');
console.log(tem)