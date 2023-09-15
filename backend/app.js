const express = require ('express');
const app=express();
const PORT=8000;
const bodyParser=require ('body-parser');
const cors=require('cors');
const dotenv=require('dotenv').config();
const ConnectDB=require ('./Database/Db');

//middalware 
 app.use(bodyParser.urlencoded({extended:false}));
 app.use(bodyParser.json());
 app.use(express.json());
 app.use(cors()); 

//connexion avec la DB
ConnectDB();

app.use('/',require('./routes/Admin'));


app.listen(PORT, () => {
    console.log('serveur démarré sur '+PORT);
});
