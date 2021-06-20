const mongoose=require('mongoose');
//making connection to DB in atlas
mongoose.connect('mongodb+srv://admin:admin@cluster0.izyvf.mongodb.net/SubDocument?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(ok=>console.log("Connected to Database"))
.catch(err=>console.log("Connection failed to DB",err))
module.exports=mongoose;