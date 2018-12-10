alert('hello world in typescript!');

function add(){
  let numberone = parseInt((<HTMLInputElement>document.getElementById("numberone")).value);
  let numbertwo = parseInt((<HTMLInputElement>document.getElementById("numbertwo")).value);
  let result = numberone+numbertwo;
  console.log("Add! Answer:" + result);
  writeResult(result);
}

function sub(){
  let numberone = parseInt((<HTMLInputElement>document.getElementById("numberone")).value);
  let numbertwo = parseInt((<HTMLInputElement>document.getElementById("numbertwo")).value);
  let result = numberone-numbertwo;
  console.log("Subtract! Answer:" + result);
  writeResult(result);
}

function mult(){
  let numberone = parseInt((<HTMLInputElement>document.getElementById("numberone")).value);
  let numbertwo = parseInt((<HTMLInputElement>document.getElementById("numbertwo")).value);
  let result = numberone*numbertwo;
  console.log("Multiply! Answer:" + result);
  writeResult(result);
}

function div(){
  let numberone = parseInt((<HTMLInputElement>document.getElementById("numberone")).value);
  let numbertwo = parseInt((<HTMLInputElement>document.getElementById("numbertwo")).value);
  let result = numberone/numbertwo;
  console.log("Divide! Answer:" + result);
  writeResult(result);

}

function writeResult(n){
  var num = n.toString();
  (<HTMLInputElement>document.getElementById("result")).value = num;
}
