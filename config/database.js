const mongoose =require("mongoose");

require("dotenv").config(); 

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        // useNewUrlParser:true,
        // useUnifiedTopoly:true
    })
    .then(()=>{console.log("DB COnnection succesfully ")})
    .catch((error)=>{
        console.log("Issue in DB Component")
        console.error(error.message);

        
        process.exit(1);
    });
}

module.exports=dbConnect;

