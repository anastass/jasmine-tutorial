function Hello2() {
}

Hello2.prototype.hello = new Hello();

Hello2.prototype.world = function() {
    this.hello.world();
    this.message = this.hello.message;
}

Hello2.prototype.greeting = function(name) {
    this.hello.greeting(name);
    this.message = this.hello.message;
};

Hello2.prototype.question = function(name) {
    this.hello.greeting(name);
    this.message = this.hello.message + " How are you?";
};
