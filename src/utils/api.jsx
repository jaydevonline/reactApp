var Fetch = require('whatwg-fetch');
var rootUrl = "http://localhost:8000/src/";



module.exports = window.api =  {
	get: function(url){
		return fetch(rootUrl + url)
		.then(function(response){
			return response.json();
		})
		.then(function(data){
			console.log(data)
			return data
		})
	}
};