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






    



// const detailSchema = new Schema({
//    detail: String,
//    done: {type: Boolean, default: false},
// })

// const userSchema = new Schema({
//     name: String,
//     email: String,

// })

module.exports = mongoose.model('Day', daySchema);




// myTasks = {
//     Monday: [task1, task2, task3],
//     Tuesday: [task1, task2, task3],
//     Wednesday: [task1, task2, task3],
// // }


// const myTasks = [
//      {task: "Wipe out all surfaces", details:"Wipe out all surfaces with a microfiber cloth and all-purpose cleaner – TVs, shelves, tables, lamps etc."},
//      {task: "Vacuum and mop all floors", details:"Sweep/Vacuum and mop floor od the living room, kitchen and coredores"},
//      {task: "Clean appliances", details:"Clean appliances from the outside (fridge, oven, microwave, dishwasher, coffee machine)"},
//      {task: "Clean the bathroom", details:"Clean and disinfect the sink, Clean hair out of drains and Scrub shower and bathtub "},
//      {task: "Cleaning Supplies", details:"Wipe down the vacuum cleaner, change bags if needed, Clean trash cans"},
//      {task: "Clean Personal Bedroom", details:"Dust all surfaces in the bedroom – nightstands, mirror, dresses, lamps, decorations etc, Change sheets and linens, Clean the floor "},
//      {task: "Wash the dishes", details:"Wash the dishes (or place them/take them out of the dishwasher)"},
//      {task: "Taking out the Trash", details:"Take ou the trash (Personal Bedroom, Kitchen, Living room etc."},
     

// // ];

// const myTasks = {
//     Monday: ["Wipe out all surfaces", "Vacuum and mop all floors" ,"Clean appliances"],
//     Tuesday: ["Clean the bathroom", "Cleaning Supplies","Clean Personal Bedroom" ],
//     Wednesday: ["Wash the dishes", "Taking out the Trash" , "Wipe out all surfaces"],
// // }
// // function getAll() {
// //     return myTasks;
// // }









    
