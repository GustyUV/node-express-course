const express = require('express');
const app = express();

const mockUserData = [
	{name: 'Gustavo'},
	{name: 'Emilio'}
];

app.get('/users', function(req, res){
	res.json({
		success: true,
		message: 'Successfully got users"',
		users: mockUserData
	})
});

app.listen(8000, function(){
	console.log("Server is running...");
});