function Hello() {
}

Hello.prototype.world = function() {
    this.message ='world';
}

Hello.prototype.greeting = function(name) {
	this.message = "Hello " + name + "!";
}