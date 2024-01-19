//Task 3
 
type Callback = {(a: string): void};

function greet(name: string, callBack: Callback) {
    //console.log('Hello ${name}');
    callBack(name);
}
function sayHello(name: string) {
    console.log('Welcome $ {name}');
}

function sayGoodBye() {
    console.log("GoodBye");
}

greet("tehreem", sayHello);
greet("tehreem", sayGoodBye);