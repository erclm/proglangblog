alert('hello world in typescript!');

function add(){
  let numberone = parseInt((<HTMLInputElement>document.getElementById("numberone")).value);
  let numbertwo = parseInt((<HTMLInputElement>document.getElementById("numbertwo")).value);
  let result = numberone+numbertwo;
  console.log(result);
  (<HTMLInputElement>document.getElementById("result")).value = "9";
}

function sub(){
  let numberone = parseInt((<HTMLInputElement>document.getElementById("numberone")).value);
  let numbertwo = parseInt((<HTMLInputElement>document.getElementById("numbertwo")).value);
  let result = numberone-numbertwo;
  console.log(result);
}

function mult(){
  let numberone = parseInt((<HTMLInputElement>document.getElementById("numberone")).value);
  let numbertwo = parseInt((<HTMLInputElement>document.getElementById("numbertwo")).value);
  let result = numberone*numbertwo;
  console.log(result);
}

function div(){
  let numberone = parseInt((<HTMLInputElement>document.getElementById("numberone")).value);
  let numbertwo = parseInt((<HTMLInputElement>document.getElementById("numbertwo")).value);
  let result = numberone/numbertwo;
  console.log(result);
}
