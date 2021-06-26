const fs = require('fs')

fs.readdir('./',(err,files)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(files[0]);
    }
})