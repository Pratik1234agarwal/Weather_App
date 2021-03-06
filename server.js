
const fetch = require('node-fetch');

// Setup empty JS object to act as endpoint for all routes
projectData = {};
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
app = express();

/* Middleware*/
const bodyParser= require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const server = app.listen(port,listening);

function listening(){
    console.log("Server Started : ");
    console.log("Listening on port : "+port);
}

const baseUrl = "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";
const apiKey = "&appid=27b5467a4be2c6107b1d2e0c7ba4054b";







// setting up GET request
const getData = async(url='') => {
    const request = await fetch(url);
    try{
        projectData = await request.json();
        return projectData;
    }
    catch(error){
        console.log("error ",error);
    }
}


app.post('/weather',async(req,res)=>{
    url = baseUrl+req.body.pin+apiKey;
    programData = await getData(url);
    res.send({message:"Done"});
});


app.get('/all',function(req,res){
    res.send(projectData);
});