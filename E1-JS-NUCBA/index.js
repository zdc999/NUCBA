/* Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista).

TODAS  las respuestas deben ser USER-FRIENDLY.
Si (como en el punto B), la respuesta es un booleano (true o false), no imprimir el booleano , imprimir en consola una respuesta que toda persona pueda entender, sepa o no de programación (Es decir, no podemos imprimir un array o un objeto en consola, por ejemplo.).
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso.

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸 */

// Objeto Pizzas
const pizzas = [
  {
    id: 0,
    nombre: "Muzzarella",
    ingredientes: ["queso", "salsa", "aceitunas"],
    precio: 500,
  },
  {
    id: 1,
    nombre: "Fugazzeta",
    ingredientes: ["queso", "salsa", "aceitunas", "cebolla"],
    precio: 600,
  },
  {
    id: 2,
    nombre: "Cuatro Quesos",
    ingredientes: ["cuatro quesos", "salsa", "aceitunas"],
    precio: 800,
  },
  {
    id: 3,
    nombre: "Napolitana",
    ingredientes: ["queso", "salsa", "aceitunas", "tomate"],
    precio: 600,
  },
  {
    id: 4,
    nombre: "Calabresa",
    ingredientes: ["queso", "salsa", "aceitunas", "salame"],
    precio: 900,
  },
  {
    id: 5,
    nombre: "Tropical",
    ingredientes: ["queso", "salsa", "aceitunas", "anana"],
    precio: 800,
  },
];

console.warn("Ejercicio A)"); // a) Las pizzas que tengan un id impar.
function calcularPizzasImpar() {
  pizzas.filter((pizza) =>
    pizza.id % 2 !== 0
      ? console.log(
          `Las pizzas que tienen un ID impar son: ${pizza.nombre} - ID:${pizza.id}`
        )
      : null
  );
}
calcularPizzasImpar();

console.warn("Ejercicio B)"); // b) ¿Hay alguna pizza que valga menos de $600?
function calcularPrecioMenor() {
  pizzas.some((pizza) => {
    pizza.precio < 600
      ? console.log(
          `Las pizzas que tienen un precio menor a $600 son: ${pizza.nombre}: $ ${pizza.precio}`
        )
      : null;
  });
}
calcularPrecioMenor();

console.warn("Ejercicio C)"); // c) El nombre de cada pizza con su respectivo precio.
function infoDePizza() {
  console.log("Nombre y precio de las pizzas");
  pizzas.map((pizza) =>
    console.log(`Pizza ${pizza.nombre}: $ ${pizza.precio}`)
  );
}
infoDePizza();

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.
console.warn("Ejercicio D)");
function infoIngredientes() {
  pizzas.forEach((pizza) =>
    console.log(
      `La ${
        pizza.nombre
      } lleva estos ingredientes: ${pizza.ingredientes.toString()}`
    )
  );
}
infoIngredientes();
