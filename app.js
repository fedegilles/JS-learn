// This is my first Js Code
// console.log('Hello World');

// ========  Variables
// let name = 'Mosh';
// console.log(name);

// Cannot be a reserved keywords (let, if, else, var , false, true, typeof etc...)
// Should be meaninful
// Cannot start with a number
// Cannot contain space or hyphen(-)
// Are case-sensitive

// let firtName = 'Mosh', lastName = 'Hola'; No tan comun pero usable

// let firstName = 'Mosh';
// let lastName = 'Hola' La mejor manera de usar variables


// ========  Constants
// const interestRate= 0.3;
// interestRate = 1;
// console.log(interestRate);
// Usamos constantes si no necesitamos reasignar una variable, sino usamos let...




// ========  Primitive Types
//  String, Number, Boolean, Undefined, Null
// let name = 'Mosh'; // String Literal
// let age = 30; // Number Literal
// let isApproved = false; // Boolean Literal - usado para agregar logica...
// let firstName = undefined; //
// let selectedColor = null; // cuando no queremos dejar libre una variable, sin asignacion.



//  ======== Js dynamic language
// let name = 'Mosh'; // Nosotros podemos cambiar a medida que corremos el programa, app, etc... - Usamos typeof en la consola de chrome para ver como cambiar el tipo de la variable




//  ======== Objects
// Object / Array / Function
// Declarando person/object
// {} => objeto literal

/*let person = {
  // keys
  name: 'Mosh',
  age: 30
};*/

// dot notation
// person.name = 'John';

// Bracket notation
// let selection = 'name';
// person[selection] = 'Mary';

// console.log(person.name);



// ======== Arrays (list of items)
// [] => Array literal
/*let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);/*/




//  ======== Functions (statements)
// Performing a task
function greet(name, lastName) {
  // body of the Function
  // logic
  console.log('Hello ' + name + ' ' + lastName );
}

greet('John', 'Smith');

// Types of Functions
// calculating a value

function square(number) {
  return number * number
}

console.log(square(2));
