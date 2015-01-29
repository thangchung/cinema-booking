var $ = require('jquery');

module.exports = HomePage;

function HomePage() {
	$.each([1, 2, 3], function(index, item) {
		console.log(item);
	});
}