// <% for (const day in days){  %>
//     <% days[day].forEach((task) => { %>  
//     <tr>
//         <td id="mo"><a href="/tasks/<%= task.id %>"><%= task.task %></a></td>
//         <td id="tu"><a href="/tasks/<%= task.id %>"><%= task.task %></a></td>
//         <td id="we"><a href="/tasks/<%= task.id %>"><%= task.task %></a></td>
//         <td id="th"><a href="/tasks/<%= task.id %>"><%= task.task %></a></td>
//         <td id="fr"><a href="/tasks/<%= task.id %>"><%= task.task %></a></td>
//         <td id="sa"><a href="/tasks/<%= task.id %>"><%= task.task %></a></td>
//         <td id="su"><a href="/tasks/<%= task.id %>"><%= task.task %></a></td>
        
//     </tr>
//     <% }); %> 
//     <%  } %>


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


// login/out google

<!-- <% if (user) { %>
    <a id="logIn" href="/logout"><i class="material-icons left">trending_flat</i>Log Out</a>
  <% } else { %>
    <a id="logIn" href="/auth/google"><i class="material-icons left">vpn_key</i>Login with Google</a>
  <% } %> -->




  //user router

  / var usersCtrl = require("../controllers/users");

// function isLoggedIn(req, res, next) {
//   if ( req.isAuthenticated() ) return next();
//   res.redirect('/auth/google');
// }

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// /* GET users . */

// router.get('/users', isLoggedIn, usersCtrl.index);

// // POST /tasks
// // We will already have access to the logged in student on
// // the server, therefore do not use: /users/:id/tasks
// router.post('/:id/tasks', isLoggedIn, usersCtrl.createTask);

// // DELETE /tasks/:id
// router.delete('/:daysid/tasks/:id/', usersCtrl.delleteTask);
