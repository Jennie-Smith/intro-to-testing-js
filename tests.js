// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it("should be a defined function", function(){
        expect(typeof sayHello).toBe('function');
    });
    it("should return a string when called", function (){
        expect(typeof sayHello()).toBe("string");
    });
    it("should return the string 'Hello, Jane!'", function (){
    expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return the string 'Hello, Alex!'", function (){
    expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return the string 'Hello, Pat!'", function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return string 'Hello, World' from undefined", function (){
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return string 'Hello, World' from true", function (){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return string 'Hello, World' from false", function (){
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function (){
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function(){
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when given the number 5', function(){
        expect(isFive(5)).toBe(true);
    })
});

describe('isEven', function (){
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should be a boolean input', function(){
        expect(typeof isEven()).toBe('boolean');
    });
    it('should be true when given 2', function(){
        expect(isEven(2)).toBe(true);
    });
    it('should be true when given -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should be true when given 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it("should be false when given the string 'Banana'", function() {
        expect(isEven("Banana")).toBe(false);
    });
    it("should be false when given the string '8'", function() {
        expect(isEven("8")).toBe(true);
    });
    it("should be false when given the string 'infinity'", function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it("should be false when made true", function() {
        expect(isEven(true)).toBe(false);
    });
    it("should be false when made false", function() {
        expect(isEven(false)).toBe(false);
    });
    it("should be false when made undefined", function() {
        expect(isEven()).toBe(false);
    });
})

describe('isVowel', function (){
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should be a boolean input', function(){
        expect(typeof isVowel()).toBe('boolean');
    });
    it("should be true with the string 'a'", function() {
        expect(isVowel("a")).toBe(true);
    });
    it("should be true with the string 'A'", function() {
        expect(isVowel("A")).toBe(true);
    });
    it("should be true with the string 'y'", function() {
        expect(isVowel("y")).toBe(false);
    });
    it("should be true with the number 4", function() {
        expect(isVowel(4)).toBe(false);
    });
    it("should be false when return true", function() {
        expect(isVowel(true)).toBe(false);
    });
    it("should be false when return false", function() {
        expect(isVowel(false)).toBe(false);
    });
    it("should be false with the string 'banana'", function (){
        expect(isVowel("banana")).toBe(false);
    })
    it("should be false when undetermined", function (){
        expect(isVowel()).toBe(false);
    })
})

describe('add', function(){
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it("should return 5, adding 2 and 3", function() {
        expect(add(2, 3)).toBe(5);
    });
    it("should return -12, adding -3 and -9", function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it("should return 11, adding '5' and 6", function() {
        expect(add("5", 6)).toBe(11);
    });
    it("should return NaN, adding 'banana' and 'split'", function() {
        expect(add("banana", "split")).toBe('NaN');
    });
    it("should return NaN, adding 2 and 'apples'", function() {
        expect(add(2, "apples")).toBe(NaN);
    });
    it("should return NaN when undefined", function() {
        expect(add()).toBe(NaN);
    });
})