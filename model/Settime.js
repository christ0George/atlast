const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ponappa001:maybeyes123@kuthira.67uwjmc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log(" date DB connected")})
.catch(err=>console.log(err));

let da=mongoose.Schema;
const dateschema=new da(
    {
        from:Date,
       to:Date,
      
    }
);
var dates=mongoose.model("dates",dateschema)
module.exports=dates;