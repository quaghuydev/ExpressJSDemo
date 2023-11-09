const mongoose = require('mongoose');

const connect=async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/fs_education_dev');
        console.log('connect successfull');
    } catch (error) {
        console.log('connect failed');
    }
}
module.exports ={connect}