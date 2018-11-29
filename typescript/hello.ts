alert('hello world in typescript!');
let numberone = parseInt((<HTMLInputElement>document.getElementById("numberone")).value);
let numbertwo = parseInt((<HTMLInputElement>document.getElementById("numbertwo")).value);

let result = numberone + numbertwo;
console.log(result);
