//declaring modules
var express = require('express'),
    path = require('path');

//creating express app
app = express();

//setting rendering engine as jade
app.set('view engine','jade');

//seting the location of the views and stic files
app.set('views',__dirname+'/views');
app.use(express.static(path.join(__dirname,'public')));

//rending the defult page as index page when we start localhost
app.get('/', function(req, res){
  res.render('index');
});

//instruct app to use the viewname as param to launch different pages
app.get('/:viewname', function(req,res){
  res.render(req.params.viewname);
}); 

//create a port to listen to
app.listen(3000);
console.log('Express server listening on port 3000');