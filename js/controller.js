app.controller('mainController', function(service){
	this.getQuotes = service.getData;
	this.addQuote = service.addData;
	this.removeQuote = service.removeData;  //'x' button is better
});