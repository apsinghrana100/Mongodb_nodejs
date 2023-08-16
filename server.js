const app = require("express")();
const http = require("http");
const bodyParser = require("body-parser");

const {getDatabaseClient,connectToDatabase} = require('./connection');
const temp = require('./connection');



const studentRouter = require('./src/studnet/router');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// app.get("/",(request,response)=>{
//     response.send("Hello i am home page");
// })

app.use("/",studentRouter);


// async function runserverDatabase()
// {   try {
//         await temp.connectToDatabase();
//         app.listen(8000,()=>{
//             console.log("serveer is running on port number");
//         })
// } catch (error) {
//     console.log(error);
// }
           
// }
// runserverDatabase();

//second way to connect with 
temp.connectToDatabase().then((response)=>{
    // console.log(response);
    app.listen(8000,()=>{
                    console.log("serveer is running on port number");
                })
})

