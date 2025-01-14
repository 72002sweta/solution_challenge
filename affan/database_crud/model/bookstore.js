const  mongoose  = require("mongoose")

const bookstoreSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
        lowercase:true
    },
    // sellerInfo:{
    //     name:{
    //         type:String,
    //         required: true
    //     }
    // },
    edition:{
        type : Number,
        required : true
    },
    price:{
        type : Number,
        required : true,
        min : 0
    }

})

const Bookstore = mongoose.model("Bookstore", bookstoreSchema );

module.exports = Bookstore;
