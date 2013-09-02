describe("Array#indexOf", function() {
  it("returns -1 when given 5", function() {
    [1,2,3].indexOf(5).should.equal(-1);
  });

  it("returns -1 when given 0", function() {
    [1,2,3].indexOf(0).should.equal(-1);
  });
});
