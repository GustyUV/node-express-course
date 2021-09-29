const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

const mockUserData = [
	{name: 'Gustavo'},
	{name: 'Emilio'}
];

// #region GET

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
});

// In Express, words with a colon in front of them in the url are treated as variables.
app.get('/users/:id', function(req, res){
	console.log(req.params.id);
	res.json({
		success: true,
		message: 'Got one user',
		users: req.params.id
	})
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// #endregion GET

// #region POST

app.post('/login', function(req, res){
	const username = req.body.username;
	const password = req.body.password;

	const mockUsername = "billyTheKid";
	const mockPassword = "superSecret";

	if(username === mockUsername && password === mockPassword){
		res.json({
			success: true,
			message: 'Password and username match!',
			token: 'encrypted token goes here'
		});
	}
	else{
		res.json({
			success: false,
			message: 'Password and username do not match'
		});
	}
});

// #endregion POST

// listen port
app.listen(8000, function(){
	console.log("Server is running...");
});