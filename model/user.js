import mongoose from "mongoose";
const {Schema, model} = mongoose;

const userSchema = new Schema({
    name: {
        type:String
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }
})
const usermodel = model('users', userSchema);
export default usermodel;