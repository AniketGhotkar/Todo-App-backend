const express = require("express");
const app = express();

// load config  from env
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse the req .body 
app.use(express.json());

// import routes todo api
const  todoroutes = require("./routes/todos");

app.use("/app/v1",todoroutes);

app.listen(PORT,() => {
    console.log(`server is running started at ${PORT}`);
});

// connection is db
const dbConnect = require("./config/database");

dbConnect();

app.get("/",(req,res) => {
    res.send(`<h1>This is homepage body</h1>`);
})




