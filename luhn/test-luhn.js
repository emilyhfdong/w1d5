var assert = require("chai").assert;
var check = require("./luhn.js");

describe("Numbers", function() {
  it("should return true if number is valid", function() {
    var validNumber = 502091324785;
    assert.isTrue(check(validNumber));
  });


  it("should return false if a number is NOT vald", function() {
    var invalidNumber = 4462009138008;
    assert.isFalse(check(invalidNumber));
  });


});

