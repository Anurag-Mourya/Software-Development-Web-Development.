

// ///////////////////////// JS Objects. ///////////////////

// Def. An object is a collection of key–value pairs.
// ex- 
const user = {
    name: "Anurag", // property
    age: 25, // property
    isDev: true // property
};


////////////////////////Object Properties////////////////////
// Def. Object properties are the key with values. ex. name: "Anurag", 

///////////this////////////////////////
// Def. There is different types of uses of this . 

// 1. this refers to the object that is calling the function.
// ex. 
const user1 = {
    name: "Anurag",
    greet() {
        console.log(this.name)// here this referes to the user1 object.
    }
}
// user1.greet();// Anurag, means

// 2. In the browser global scope, this refers to the window object (in non-strict mode)."
// 3. In a normal function, this depends on how the function is called. In non-strict mode it defaults to window, but in strict mode it is undefined.
// 4. This is inside the arrow fucntions is not refere to any one or given undefined. 


////////////////Spred (...) Operator////////////////
// Def- Sperd operator copies the properties of object and and merge into new object. 

// ex- 
const objA = { Aname: "anurag", Aage: 27 };
const objB = { name: "krishan", age: 29 }
const newSpred = { ...objA, ...objB }

// console.log(newSpred)
// Trick - If we have same property key and merge with spred operator then the last object property is fetch ... is not allows dublicacy. 

// With spred we can - 1. Copy object, 2. Merge Object. 3. Overwrite the property. 

//1. Copy object
const a = { city: "Rewa" }
// console.log({ ...a })

// 2. Merge Object.
const b = { state: "Madhya Pradesh" }
// console.log({ ...a, ...b });

//  3. Overwrite the property. 
// console.log({ ...a, city: "Prayagraj" })
// console.log(a)// It is not modify the actual object. 



// Interviwe Questions.....
// 1.Spread vs Reference
const a1 = { x: 1 };
const b1 = a1;
console.log(b1)
b1.x = 2;
console.log(a1.x); // 2 ❌

const b11 = { ...a };
b11.x = 2;
console.log(a1.x); // 2 ✅


/////////////////////////////Objects Methods. Call, Apply And Bind.(Not only for js ojects)  //////////////////////////////////////

// Sometimes we want to control what this points to. That is why JavaScript gives us: call, apply and bind methods

// 1. Call - call() is used to call a function immediately with a specific this value and arguments passed one by one.

// ex - 
const person1 = {
    name: "Anurag"
}
const person2 = {
    name: "Krishna"
}

function greet(city) {
    console.log(`Hello ${this.name} Your leaves in ${city || ""}`)
}

greet.call(person1); // here a part of definition is satisfy call() is used to call a function immediately with a specific this value.

greet.call(person2, "Surat")// now this is the second part of definition is - arguments pass one by one. also 

// Conclusion - So if we combine both the definitions the full definitions is satisfy with example. 

// 2.  Apply - is used to call a function immediately with a specific this value and arguments passed in to array.

// ex- 
const personInfo = {
    name: "Anurag",
    name1: "Krishna"
}

function introduce(country, city, village) {
    // console.log(`${this.name} and ${this.name1} is lives in ${country},  ${city}, ${village}`)
}
introduce.apply(personInfo, ["India", "Rewa", "Deaupa"])

// Conclusion - Same as call but the argumants passed in array. 


// 3."bind() is a method that returns a new function with a fixed this context. It does not execute immediately, and it allows passing arguments individually like call(). It is mainly used when we want to reuse a function later with a specific this value."

// ex- 

function greeting(name1, name2) {
    console.log("Hello " + this.name + name1 + name2);
}

const user2 = {
    name: "Anurag"
};

const newGreet = greeting.bind(user2, " Anurag", " Krishna");
// newGreet();


// understatnd the fixed value of bind() with this example. 
function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2); // here 2 is fixed on b parameter. 

// console.log(double(5)); // 10 // and when 5 is pass then it gona a parameter. 


// Easy to remember to all definitions
// Easy memory trick
// call → C for Current call
// apply → arguments A as Array
// bind → B for Build new function

// Important point for interview.....
// Arrow functions do not have their own this. They take this from the outer scope. So call, apply, and bind cannot change this of an arrow function....

// ex- 
const obj = {
    name: "Anurag",
    arrow: () => {
        console.log(this.name); // no output. 
    }
};

obj.arrow.call({ name: "Rahul" });


// interview trap. with bind and new
function Person(name) {
    this.name = name;
}

const boundPerson = Person.bind({ name: "Old Name" });

const p = new boundPerson("Anurag");
// console.log(p.name); // Anurag


////////////////////////////// Code implemantation

// Spred Operation implement these things 1. Copy object, 2. Merge Object. 3. Overwrite the property.
// Exmaples of all call, apply and bind.
// Example of bind to ensure the fixed value of this. 