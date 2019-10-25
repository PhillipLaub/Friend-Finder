
let friends = require('../data/friends.js');

module.exports = function(app) {
	
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
		
		let input = req.body;
		let response = input.scores;

		let matchName = '';
		let matchImage = '';
		let totalDifference = 500; 

		for (let i = 0; i < friends.length; i++) {
			
			let diff = 0;
			for (let j = 0; j < response.length; j++) {
				diff += Math.abs(friends[i].scores[j] - response[j]);
			}
			
			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
			}
		}

		friends.push(input);

		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};