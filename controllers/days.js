const Day = require('../models/day');


function allDays(req, res) {
    Day.find({}, function(err,  days) {
        console.log(days);
      res.render('days', { title: 'myTurn', days });
    });
  }




  


function newTask(req, res) {
    Day.findById(req.params.id, function(err, day){
    console.log(day)
    res.render('new',{ title: 'myTurn', day });
})
};


function createTask(req,res) {
    
    Day.findById(req.params.id, function(err, day){ 
       console.log(day)
       day.tasks.push(req.body);
       day.save(function(err) {
           res.redirect(`/days/`);

       })
    })
    
}

function editTask(req,res) {
   console.log("EDIT TASK")
    Day.findById(req.params.daysid, function(err, day){ 
       console.log(day)
       let task = day.tasks.filter(function(task) {
        return task._id == req.params.id
        })[0]
        console.log(task)
        res.render(`details`, {day, task});
        
           

       })
    
    
    
    
}

      
function updateTask(req, res) {
    Day.findById(req.params.daysid, function(err, day){
        const task = day.tasks.find(task => task._id == req.params.id);
        task.task = req.body.task
        task.details = req.body.details
        day.save(function(err) {
            console.log(task)
            res.redirect(`/days/`);
        })

    });

    
}


function deleteTask(req, res) {
    console.log("test")
    Day.findById(req.params.daysid, function(err, day){
    day.tasks.id(req.params.id).remove();
        day.save(function(err) {
            res.redirect(`/days/`);
 
        })
     })
    
    
}



module.exports = {
  
    allDays,
    newTask,
    createTask,
    deleteTask,
    updateTask,
    editTask,
}