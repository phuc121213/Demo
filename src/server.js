import express from  "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouter from "./route/web";
import connetDB from "./config/connetDB";

require("dotenv").config();

let app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouter(app);

connetDB();
let port = process.env.PORT;

app.listen(port, ()=>{
    console.log("listening on port:" + port);
});

