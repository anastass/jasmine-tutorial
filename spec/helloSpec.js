describe("Hello", function () {
	var hello;

	beforeEach(function() {
		hello = new Hello();
	});

    it('returns "world"', function () {
    	hello.world();
        expect(hello.message).toEqual("world");
    });

    it('returns salutation for John', function () {
    	hello.greeting("John");
        expect(hello.message).toEqual("Hello John!");
    });
});
