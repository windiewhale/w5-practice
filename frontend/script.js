/* console.log(a)
console.log(c) */

/* console.log("hello");
console.log('szia');
console.log(`szevasz`); */ //backtick lehet többsoros, a másik kettő nem. 


/* console.log(typeof 2) 
console.log(typeof NaN) 
console.log(0 / 0) 
console.log(2.14)  */

/* console.log(true)
console.log(false) */

/* console.log(undefined) //érték nélkül, nem történt meg az érték adás. 
console.log(null) //valamilyen dolog nem található, nincs, főleg objektumokra igaz
console.log(typeof undefined)  
console.log(typeof null) //object */

/*  console.log({
    title: "start coding", 
    type: "solo",
    difficulty: 4.1,
    usefulness: 4.2,
    enjoyability: 3.7,
    materials: 3.4,
    tasks: [
        {title: "Bank Accounts", 
        description:""},
        {title: "100 doors",
        description: ""},
        {title: "word filter", 
        description: ""}
    ]
}
) */
/* 
var a = "Hello1"
let b = "Hello2"
const c = "Hello3"

console.log(a)
console.log(b)
console.log(c) */


/* function d() {
    if (1+1 === 2) { //ha ide kerül be a 3 változó csak a var jön létre.
    }
    var a = "Hello1"
    let b = "Hello2"
    const c = "Hello3"
    console.log(a)
    console.log(b)
    console.log(c)
}  // {} belül nem látja, ha kívülre kerül a console.log 

d() //ezzel hívtuk meg a függvényt */

/* let e = 1
console.log(e)
e = 2
console.log(e)
e = e*2
console.log(e) */

/* function multiplyByTwo(num){
    console.log(num) 
    return num*2
} 
/* let f = multiplyByTwo(1) 
console.log(f) */

/* console.log(multiplyByTwo(1)); 
console.log(num); */ 

/* let g = {
    myMethod: function () { //nem kell nevet adni mert a kulcs a név maga
        console.log("hello");
    }
}
g.myMethod() // így kell meghívni a függvényt, akkor ha objektum, g változó myMethod key elementje
 */

/* let window = { //ez nem fog működni, csak pédaként került ide
    addEventListener: function (eventName, eventFunction) {
         if (eventName === "load"){
             eventFunction()
         }       
    }
}

window.addEventListener("load", loadEvent) //2 argumentumot küldünk be, egyik string másik esemény */

let h = {
    anotherMethod: function (text) {
        return `you sent the following argument to this method: ${text}`
    }
}
let i = h.anotherMethod("Hello")
console.log(i);
console.log(h.anotherMethod("another argument"));


