function Hello2() {
}

Hello2.prototype.world = function() {
	var hello = new Hello();
    hello.world();
    this.message = hello.message;
}

Hello2.prototype.greeting = function(name) {
	var hello = new Hello();
    hello.greeting(name);
    this.message = hello.message;
};

Hello2.prototype.question = function(name) {
	var hello = new Hello();
    hello.greeting(name);
    this.message = hello.message + " How are you?";
};
