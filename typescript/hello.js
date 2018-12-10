alert('hello world in typescript!');
function add() {
    var numberone = parseInt(document.getElementById("numberone").value);
    var numbertwo = parseInt(document.getElementById("numbertwo").value);
    var result = numberone + numbertwo;
    console.log(result);
    writeResult(result);
}
function sub() {
    var numberone = parseInt(document.getElementById("numberone").value);
    var numbertwo = parseInt(document.getElementById("numbertwo").value);
    var result = numberone - numbertwo;
    console.log(result);
}
function mult() {
    var numberone = parseInt(document.getElementById("numberone").value);
    var numbertwo = parseInt(document.getElementById("numbertwo").value);
    var result = numberone * numbertwo;
    console.log(result);
}
function div() {
    var numberone = parseInt(document.getElementById("numberone").value);
    var numbertwo = parseInt(document.getElementById("numbertwo").value);
    var result = numberone / numbertwo;
    console.log(result);
}
function writeResult(n) {
    var num = n.toString();
    document.getElementById("result").innerHTML = num;
}
