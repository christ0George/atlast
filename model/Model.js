// const mongoose = require("mongoose");
// mongoose
//   .connect(
//     "mongodb+srv://ponappa001:maybeyes123@kuthira.67uwjmc.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then(() => {
//     console.log(" Model DB connected");
//   })
//   .catch((err) => console.log(err));

// let sa = mongoose.Schema;
// const modelschema = new sa({
//   company: String,
//   Sname: String,
// });
// var modmodel = mongoose.model("Model", modelschema);
// module.exports = modmodel;


const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ponappa001:maybeyes123@kuthira.67uwjmc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log(" Model DB connected")})
.catch(err=>console.log(err));

let mo=mongoose.Schema;
const modelschema=new mo(
    {
        company:String,
        model:String
    }
);
var modmodel=mongoose.model("model",modelschema)
module.exports=modmodel;
