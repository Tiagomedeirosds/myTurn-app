const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    //[day]: string?
    task: {type: String},
    details: {type: String},
    done: {type: Boolean, default: false},
    
});

const daySchema = new Schema ({
    day: {type: String},
    // tasks: [ {type: Schema.types.ObjectId, ref: "Tasks"}],
    tasks: [taskSchema],
});





module.exports = mongoose.model('Day', daySchema);
















    
