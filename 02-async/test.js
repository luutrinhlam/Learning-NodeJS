let count = 0
setInterval(() => console.log(`${++count} mississippi`), 1000)
const seconds = [5, 2]
seconds.forEach(s => {
setTimeout(() => console.log(`Waited ${s} seconds`), 1000 * s)
})
console.log('done!')