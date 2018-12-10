alert('hello world in typescript!');

function add(){
  let numberone = parseInt((<HTMLInputElement>document.getElementById("numberone")).value);
  let numbertwo = parseInt((<HTMLInputElement>document.getElementById("numbertwo")).value);
  let result = numberone+numbertwo;
  console.log(result);
  writeResult(result);
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

function writeResult(n){
  var num = n.toString();
  document.getElementById("result").innerHTML = num;
}
