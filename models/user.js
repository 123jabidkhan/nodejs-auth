import mongoose from 'mongoose';


// user schema
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = mongoose.model('users',userSchema);


export default User;