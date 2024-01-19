//Task 3
function greet(name, callBack) {
    //console.log('Hello ${name}');
    callBack(name);
}
function sayHello(name) {
    console.log('Welcome $ {name}');
}
function sayGoodBye() {
    console.log("GoodBye");
}
greet("Irfan", sayHello);
greet("Irfan", sayGoodBye);
export {};
