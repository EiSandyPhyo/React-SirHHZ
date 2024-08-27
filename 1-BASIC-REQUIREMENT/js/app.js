//Imperative Programming Paradigms 
//[focus on describing a sequence of steps that the program must take to achieve a specific goal.]

// const points = [4,2,5,3,2,7,1,4];
// let total = 0; //state
// total += points[0];
// total += points[1];
// total += points[2];
// total += points[3];
// for (let point of points) {
//     total += point;
// }
// console.log(total);

//make a unique numbers
// const points = [4,2,5,3,2,7,1,4];

// const uniqueArray = []; //state

// for(let point of points){
//     if(!uniqueArray.includes(point)){
//         uniqueArray.push(point);
//     }
//     console.log(uniqueArray);
// }
// console.log(uniqueArray);

//Declarative Programming Paradigms
//[emphasizes what the program should accomplish without specifying how it should be achieved.]
//** using arr like map, filter, reduce **

// const points = [4,2,5,3,2,7,1,4];
// const total = points.reduce((pv,cv) => pv+cv, 0); 
// console.log(total);

// to make unique no
// const points = [4,2,5,3,2,7,1,4];
// const uniqueArray = new Set(points);
// console.log(uniqueArray);


//Functional Programming Paradigms

//this is mutable ways below, so, avoid mutable ways like this
const points = [4,2,5,3,2,7,1,4];
// points.push('aaa');
// points.push('bbb');
// points.push('ccc');
console.log(points);

//use immutable ways like this, in functional programming use this method below
const newPoints = [...points, 'aaa', 'bbb', 'ccc'];
console.log(newPoints);


//use Pure function like this
function pureAdd(x,y){
    return x + y;
}
console.log(pureAdd(4,5));
console.log(pureAdd(4,5));
console.log(pureAdd(4,5));
console.log(pureAdd(4,5));


//not use Impure function like this
let total = 0;
function add(x){
    total += x;
    return total;
}
console.log(add(5));
console.log(add(5));
console.log(add(5));
console.log(add(5));