// var hola = "Hola Mundo";
// let hello = "Hello World";
// console.log(hola);
// console.log(hello);
// console.log(window);
// console.log(window.hola);
// console.log(window.hello);

// console.log("**********var**********");
// var musica = "Rock";
// console.log(`Variable Música antes del Bloque ${musica}`);

// {
//   var musica = "Pop";
//   console.log(`Variable Música dentro del Bloque ${musica}`);
// }

// console.log(`Variable Música despues del Bloque ${musica}`);

// console.log("**********let**********");
// let musica2 = "Rock";
// console.log(`Variable Música antes del Bloque ${musica2}`);
// {
//   let musica2 = "Pop";
//   console.log(`Variable Mùsica dentro del Bloque ${musica2}`);
// }
// console.log(`Variable Mùsica despues del Bloque ${musica2}`);

// let a;
// const PI = 3.141516;
// console.log(PI);
// // PI = 1.345;

// a = "kenai";
// console.log(a);

// const objeto = {
//   nombre: "Jon",
//   edad: 35,
// };

// const colores = ["rojo", "azul", "verde"];

// console.log(objeto);
// console.log(colores);

// objeto.correo = "jonmircha@gmail.com";
// colores.push("naranja");

// console.log(objeto);
// console.log(colores);

//Cadenas de texto aka Strings
let nombre = "Angel";
let apellido = "Gutierrez";
let saludo = new String("hola mundo");
let lorem =
  "         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam doloribus et libero alias reprehenderit expedita neque ipsum esse, possimus, dolore in eius, hic ipsa dolor cupiditate magnam laudantium quam harum!     ";

console.log({ nombre, apellido, saludo });
console.log(
  nombre.length,
  apellido.length,
  saludo.length,
  nombre.toUpperCase(),
  apellido.toLowerCase(),
  lorem.includes("amet"),
  lorem.includes("gato"),
  lorem.trim(),
  lorem.split(" ")
);
