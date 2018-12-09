[Back to main page](https://ereeq.github.io/proglangblog/)

##What is TypeScript?

* Open source programming language developed by Microsoft
* A superset of JavaScript
  * Superset? All of JavaScript is TypeScript
* A statically typed language

##Characteristics of JavaScript

* JS is an heavy weighted interpreted programming language
* Uses .js
* Script for web, inside <script> </script>
* Has HUGE pool of developers and widely used

##Characteristics of TypeScript

* Type is a light weighted interpreted, object-oriented compile language
* Uses .ts or tsx
* It’s more of a compile-language more than a web script, has functions, variables, etc more like Java
* Better for coding projects
* Relatively small amount of users
* Mostly used with some other web framework, couldn’t find much standalone usage

##differences in coding

###TypeScript
```
alert('hello world in typescript!');
function add(){
  let numberone = parseInt((<HTMLInputElement>document.getElementById("numberone")).value);
  let numbertwo = parseInt((<HTMLInputElement>document.getElementById("numbertwo")).value);
  let result = numberone+numbertwo;
  console.log(result);
(<HTMLInputElement>document.getElementById("result")).value = "9";
}

```

###JavaScript(compiled)
```
alert('hello world in typescript!');
function add() {
    var numberone = parseInt(document.getElementById("numberone").value);
    var numbertwo = parseInt(document.getElementById("numbertwo").value);
    var result = numberone + numbertwo;
    console.log(result);
}
```
* can see multiple syntactical differences
* the last line of TypeScript was not translated into a js script - shows that compiling takes care of some of the efficiency of the code

##Takeaway

* Created a simple calculator
* TypeScript needs more tutorials
* Definitely cleaner than JavaScript
* IDE can detect error on coding time so very useful
* Compiler is exactly the same as gcc(options, functions, terminal use)
* Is not ideal for small projects, the language has too much features and there’s no real incentive for using TypeScript over Javascript for small projects
* However for big projects, TypeScript is easier to organize because its OO. Should defintly use TypeScript for big projects
* I really don't like web scripting and all that
