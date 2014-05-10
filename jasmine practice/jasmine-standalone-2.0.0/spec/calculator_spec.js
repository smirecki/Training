describe("Calculator", function() {
	it("should store the current value at all times", function() {
		expect(Calculator.current).toBeDefined();
		expect(Calculator.current).toEqual(0);
	});
	it("should add numbers", function() {
	   expect(Calculator.add(5)).toEqual(5);
	   expect(Calculator.add(5)).toEqual(10);
	});
});