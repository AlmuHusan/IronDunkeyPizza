var express = require('express');
var app = express();
app.listen(3000, () => {
    console.log('Server listening on 3000');
})

const mongoose = require('mongoose');
mongoose.connect('URL', () => {
    console.log('Connected to Mongo DB Successfully.');
})

const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const User = require('../model/User'); 
const bcrypt = require('bcrypt');
router.post('/user', (request, response) => {
      const user = new User({
         firstName : request.body.firstName,
         lastName : request.body.lastName,
         userName : request.body.userName,
         password : request.body.password,
         email : request.body.email
      });
bcrypt.hash(user.password, 10, function (err, hash){
if (err) { 
    return next(err);
}
user.password = hash;
user.save().then(data => {
    console.log('Successfully created a new User');
}).catch(error => {
     console.log('User unable to be created.');
    })
  })
})
module.exports = router;

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/signup.html'));
});

const ejs = require('ejs');
app.set('view engine', 'ejs');
router.get('/users', (request, response) => {
     User.find({}, (error, result) => {
     if (result) {  
         response.render('availableUsers', {'users' : result});
     } else {
          response.status(404);
     }
   })
})

const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
   { usernameField: 'userName' },
   (userName, password, done) => {
     User.findOne({userName: userName}, (err, userData) => {
      let passwordCheck = bcrypt.compareSync(password,   userData.password);
if(userName === userData.userName && passwordCheck) {
    return done(null, userData)
   }
  })
}
));
app.post('/login', (req, res, next) => {
passport.authenticate('local', (err, user, info) => {
     req.login(user, (err) => {
     // Write code to redirect to any html page.
    res.redirect('/index');
     })
})
(req, res, next);
});