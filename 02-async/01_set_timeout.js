// let count = 0 ;
// console.log(`${++count} count`);


// function setOut(){
//     console.log('Hello from the pass.');
// }
// setTimeout(setOut,5500);
let count = 0
setInterval(() => console.log(`${++count} mississippi`), 1000)

function setOut(){
    console.log('Hello from the pass.');
    process.exit();
}
setTimeout(setOut, 5500)
