let count = 0;
setInterval(()=> {console.log(`${++count} counting`)},1000); //call every 1s

setTimeOutSync(2500)
console.log('hello from the past')


function setTimeOutSync(ms){
    const t0 = Date.now();
    while(Date.now() - t0 < ms){}
}