
var express  = require('express');
var app 	 = express();

// static files
app.use('/public', express.static(__dirname + '/public'));
// POST HTML parser
app.use(express.bodyParser());
// DELETE & PUT 
app.use(express.methodOverride());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setTimeout(10000);
  next();
});

app.listen(8080, function(){
	console.log('Running');
});

app.get('/*', function(req, res){
	res.sendfile('./public/index.html', {root: __dirname});
	//res.end();
});