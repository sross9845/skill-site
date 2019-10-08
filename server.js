const express = require('express');
const ejsLayouts = require('express-ejs-layouts')
const app = express();
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.get('/', function(req,res){
    res.render("index")
})
app.get('/contacts', function(req,res){
    res.render("contact", {
        linkedIn: 'https://www.linkedin.com/in/sean-ross-667049a0/',
        gitHub: 'https://www.github.com/sross9845',
        clownDatingSite: 'https://clownpassions.com/dating/sross9845/'
    })
})
app.get('/skills', function(req,res){
    res.render("skills", {
        skills: ['Half-Way Decent HTML', 'Terrible CSS', 'Dissapointing Steve','Being average at Street Fighter','Making projects that somehow incorporate alerts for Sarah']
    })
})
app.listen(3000)
