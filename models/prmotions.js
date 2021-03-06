const mongoose=require('mongoose');
const Schema=mongoose.Schema;

// Adding new type "currency" in mongoose using mongoose-currency 
require('mongoose-currency').loadType(mongoose);
const Currency=mongoose.Types.Currency;

const promotionSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    label:{
        type:String,
        default:""
    },
    price:{
        type:Currency,
        min:0,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

var Promotions=mongoose.model("Promotion",promotionSchema);

module.exports=Promotions;