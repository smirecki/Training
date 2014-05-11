describe("Some feature", function() {
  describe("someFunction", function() {
    it("should return true when called", function() {
      //expect(someFunction()).toEqual(true);
      //expect(someFunction()).toBeTruthy();
      //expect(someFunction()).not.toBeTruthy();
      expect(someFunction()).toBeTruthy();

    });

    it("returns an array of names", function() {
    	expect(anotherFunction()).toContain('mike');
    	//expect(anotherFunction()).toNotContain('tim');
    });
  });
});

describe("User", function() {
  it("should ensure that the user is 21 or older", function() {
    expect(User.getAge()).toBeGreaterThan(20);  
  });
});