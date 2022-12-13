let express= require('express');
let cors=require('cors');
const connection = require('./config');
const AuthorRouter = require('./routes/Author.routes');
const bookRouter = require('./routes/books.routes');

let app=express();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('WELCOME TO THE WORLD OF BACKEND')
})

app.use('/author',AuthorRouter);
app.use('/books',bookRouter);



app.listen(8080,async()=>{
      try{
        await connection;
      }catch(er){
        console.log('error in config',er);
      }
    console.log('connection established');
})


