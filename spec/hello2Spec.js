describe("Hello2", function () {
    var hello;

    beforeEach(function() {
        hello = new Hello2();
    });

    it('returns "world"', function () {
        hello.world();
        expect(hello.message).toEqual("world");
    });

    it('Hello2 returns salutation for John', function () {
    	hello.greeting("John");
        expect(hello.message).toEqual("Hello John!");
    });

    it('Hello2 returns salutation and question for John', function () {
        hello.question("John");
        expect(hello.message).toEqual("Hello John! How are you?");
    });
});