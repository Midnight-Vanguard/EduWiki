const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const getRoute = require('./routes/get.js');

app.use(express.json());
app.use(helmet());
app.use(cors()); 

//  THIS FILE IS THE ENTRY POINT OF THE PROGRAM


app.use("/api/get", getRoute);


app.listen(5000, () => { console.log("SERVER IS HECKED!")});
