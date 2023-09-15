

exports.admin= async (req, res) => {
    const formData=req.body;
    const name=formData.name;
    const password=formData.password;

    console.log('nom :',formData.name);
    console.log('mot de passe :',formData.password);

      try{
           if ((name=="admin") &&  (password=="PulseManageAdmin")){
            console.log('c ok');
            res.json("valid");
           }
           else  if ((name!="admin") ||  (password!="PulseManageAdmin")){
            console.log("non ok");
            res.json("novalid");
           }
      }

      catch(err){
         console.log(err);
      }

}