var request = require('request');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');

var conf = require('./conf');

var app = express();
app.use(compression());
app.set('case sensitive routing', true);
app.use(bodyParser.json());

var httpServer = http.createServer(app);

app.get('/', function (req, res, next) {
  res.send('Welcome to root endpoint');
});

//To enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", URL); //Change to client address calling this service
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/layout',handleLayoutReq);

function handleLayoutReq(req, res, next) {
	if (req.query['name'] == 'rug'){
		res.send(
		 			{
					      "name": "Google-Russian",
					      "lang": ["ru"],
					      "normal": [
					        "\u0451 1 2 3 4 5 6 7 8 9 0 - = \u0008",
					        "\u0009 \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u0449 \u0437 \u0445 \u044a \\",
					        "\u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d \u000D",
					        "{shift} \u044f \u0447 \u0441 \u043c \u0438 \u0442 \u044c \u0431 \u044e . {shift}",
					        "{accept} {space} {cancel}"
					      ],
					      "shift": [
					        "\u0401 ! \" \u2116 ; % : ? * ( ) _ + \u0008",
					        "\u0009 \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u0429 \u0417 \u0425 \u042a /",
					        "\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d \u000D",
					        "{shift} / \u042f \u0427 \u0421 \u041c \u0418 \u0422 \u042c \u0411 \u042e , {shift}",
					        "{accept} {space} {cancel}"
					      ],
					      'caps': [
					        "\u0451 1 2 3 4 5 6 7 8 9 0 - = \u0008",
					        "\u0009 \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u0429 \u0417 \u0425 \u042a /",
					        "\u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d \u000D",
					        "{shift} / \u042f \u0427 \u0421 \u041c \u0418 \u0422 \u042c \u0411 \u042e , {shift}",
					        "{accept} {space} {cancel}"
					      ]
					  }
			);
				

	}
else{
	res.send("No Layout requested");
}
res.send('Index of layouts available');
}

//Webhook
// app.get('/webhook/', handleVerify);
// app.post('/webhook/', receiveMessage);


var port = conf.PORT;
httpServer.listen(port, function () {
	console.log("Express http server listening on port " + port);
});