let express= require('express');
let cors=require('cors');
const connection = require('./config');

let app=express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('WELCOME TO THE WORLD OF BACKEND')
})



app.listen(8080,async()=>{
      try{
        await connection;
      }catch(er){
        console.log('error in config',er);
      }
    console.log('connection established');
})


