alert('hello world in typescript!');
function add() {
    var numberone = parseInt(document.getElementById("numberone").value);
    var numbertwo = parseInt(document.getElementById("numbertwo").value);
    var result = numberone + numbertwo;
    console.log("Add! Answer:" + result);
    writeResult(result);
}
function sub() {
    var numberone = parseInt(document.getElementById("numberone").value);
    var numbertwo = parseInt(document.getElementById("numbertwo").value);
    var result = numberone - numbertwo;
    console.log("Subtract! Answer:" + result);
    writeResult(result);
}
function mult() {
    var numberone = parseInt(document.getElementById("numberone").value);
    var numbertwo = parseInt(document.getElementById("numbertwo").value);
    var result = numberone * numbertwo;
    console.log("Multiply! Answer:" + result);
    writeResult(result);
}
function div() {
    var numberone = parseInt(document.getElementById("numberone").value);
    var numbertwo = parseInt(document.getElementById("numbertwo").value);
    var result = numberone / numbertwo;
    console.log("Divide! Answer:" + result);
    writeResult(result);
}
function writeResult(n) {
    var num = n.toString();
    document.getElementById("result").value = num;
}
