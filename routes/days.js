// const express = require('express');
// const router = express.Router();
const daysCtrl = require('../controllers/days');


// router.get('/', daysCtrl.task);

// // router.get('/new', daysCtrl.new);
// // router.get('/:id', daysCtrl.detail);
// // router.post('/', daysCtrl.create);

// module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', daysCtrl.allDays)
router.get('/:id/tasks/new', daysCtrl.newTask);
router.post('/:id/tasks', daysCtrl.createTask);
router.delete('/tasks/:id',daysCtrl.deleteTask);
// router.get("/:id/edit", skillCtrl.edit);
// router.put("/:id", skillCtrl.update);




module.exports = router;