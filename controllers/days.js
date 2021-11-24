const Day = require('../models/day');


function allDays(req, res) {
    Day.find({}, function(err,  days) {
        console.log(days);
      res.render('days', { title: 'myTurn', days });
    });
  }



//   new: newTask,
  


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
    // Day.create(req.body);
    // res.redirect("/days");
    // console.log(req.body);
}

function editTask(req,res) {
    res.render("details", { day: Day.getOne(req.params.id) });  
    
}

function updateTask(req, res) {
    Day.updateOne(req.params.id, req.body.skill, req.body.details );
    res.redirect(`/skills`);
}





function deleteTask(req, res) {
    Day.deleteOne(req.params.id, function(err, day){
        console.log(day);
        day.tasks.splice(req.body);
        res.redirect(`/days/`);
 
        

    });
    
}



module.exports = {
  
    allDays,
    newTask,
    createTask,
    deleteTask,
    updateTask,
    editTask,
}