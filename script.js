let a = "10";
let b = "10";

console.log(typeof(a));//Number
console.log(typeof(b));//String

console.log(a == b); 
console.log(a === b);


var x = 10;
var x = 20;  // Redeclare
x = 30; 


var ABC = 10;
let PQR = 20;
const XYZ = 30;


function funcScope(){
    var ABC = 100;
    let PQR = 200;
    const XYZ = 300;
    console.log(ABC); // 100
    console.log(PQR); // 200
    console.log(XYZ); // 300
}
funcScope()

console.log(ABC);
console.log(PQR);
console.log(XYZ);


{
    var ABC = 100;
    let PQR = 200;
    const XYZ = 300;
    console.log(ABC); // 100
    console.log(PQR); // 200
    console.log(XYZ); // 300
}

console.log(ABC);  // 100
console.log(PQR); // not define - error
console.log(XYZ);

let x;
console.log(x); // undefined
x = 10;
console.log(x);