const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ponappa001:maybeyes123@kuthira.67uwjmc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log(" Company DB connected")})
.catch(err=>console.log(err));

let co=mongoose.Schema;
const comschema=new co(
    {
        company:String,
        status:String
    }
);
var compmodel=mongoose.model("company",comschema)
module.exports=compmodel;