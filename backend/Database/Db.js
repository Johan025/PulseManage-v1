const mongoose = require('mongoose');

const ConnectDB= async  () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })  

            console.log('connexion avec mongoDB réussie sur PulseManage.')
}

catch(err){
      console.log(err);
      process.exit();
      console.log('connexion avec mongoDB a échouée')
}
}

module.exports=ConnectDB;