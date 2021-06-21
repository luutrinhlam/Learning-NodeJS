const fs = require('fs')

fs.readdir('C:\\Users\\Admin\\Desktop\\Learning-NodeJS\\02-async\\',(err,files)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(files[0]);
    }
})