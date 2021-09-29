const express = require('express');
const app = express();

const mockUserData = [
	{name: 'Gustavo'},
	{name: 'Emilio'}
];

// In Express, words with a colon in front of them in the url are treated as variables.
app.get('/users/:id', function(req, res){
	console.log(req.params.id);
	res.json({
		success: true,
		message: 'Got one user',
		users: req.params.id
	})
});

app.listen(8000, function(){
	console.log("Server is running...");
});