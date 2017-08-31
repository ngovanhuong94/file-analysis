var express = require('express');
var multiparty = require('connect-multiparty');
var multipartyMiddware = multiparty();




var app = express();
app.set('views', __dirname+ '/views');
app.set('view engine', 'ejs');


app.get('/', (req,res) => {
	res.render('index');
})

app.post('/upload', multipartyMiddware, (req,res) => {
	console.log(req.files['file-analysis']);
	res.json({
		size: req.files['file-analysis'].size
	})
})

app.listen(process.env.PORT || 3000, (req,res) => {
	console.log('Server is running');
})