describe("Calculator", function() {
  beforeEach(function() {
	Calculator.current = 0;
  });

  describe("When adding numbers", function() {
    it("should store the current value at all times", function() {
	  expect(Calculator.current).toBeDefined();
	  expect(Calculator.current).toEqual(0);
	});

	it("should add numbers", function() {
	  expect(Calculator.add(5)).toEqual(5);
	  expect(Calculator.add(5)).toEqual(10);
	});

	it("should add any numbers", function() {
      expect(Calculator.add(1,2,3)).toEqual(6);
      expect(Calculator.add(1,2,3,4)).toEqual(16);
	});
  });

});