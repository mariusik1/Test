describe("First Problem", function() {
	var array=new Array(1,2,3,4);
	it("for (1,2,3,4) it should be 6", function(){
		expect(sumOfEvenNr(array)).toBe(6);
	});
	
	var array1=new Array(1,1,1);
	it("for (1,1,1) it should be 0", function(){
		expect(sumOfEvenNr(array1)).toBe(0);
	});
	
	var array2=new Array(2,0,6);
	it("for (2,0,6) it should be 8", function(){
		expect(sumOfEvenNr(array2)).toBe(8);
	});
});

describe("Second Problem", function(){
	var array=new Array(3,6,0,10);
	it("for (3,6,0,10) it should be 10,6", function(){
		expect(twoMax(array)).toEqual([10,6]);
	});
	
	var array1=new Array(3,3,3,3);
	it("for (3,3,3,3) it should be 3,3", function(){
		expect(twoMax(array1)).toEqual([3,3]);
	});
});

describe("Third Problem", function(){
	var array=new Array(2,3,2,4,5);
	it("for (2,3,2,4,5) should be true", function(){
		expect(hadDuplicate(array)).toBe(true);
	});
	
	var array1=new Array(2,3,1,4,5);
	it("for (2,3,1,4,5) should be false", function(){
		expect(hadDuplicate(array1)).toBe(false);
	});
	
	var array2=new Array(5,1,2,3,4);
	it("for (5,1,2,3,4) should be false", function(){
		expect(hadDuplicate(array2)).toBe(false);
	});
	
	var array3=new Array(1,2,3,2,5);
	it("for (1,2,3,2,5) should be true", function(){
		expect(hadDuplicate(array3)).toBe(true);
	});
	
	var array4=new Array(1,1,7,7,2);
	it("for (1,1,7,7,2) should be true", function(){
		expect(hadDuplicate(array4)).toBe(true);
	});
});

