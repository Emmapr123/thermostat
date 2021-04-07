describe('Fizzbuzz', function() {
  it('Prints Fizz when given 3', function() {
    expect(fizzBuzz(3)).toEqual('Fizz')
  });
  it('Also Prints Fizz when given 6', function() {
    expect(fizzBuzz(6)).toEqual('Fizz')
  });
  it('Prints Buzz when given 5', function() {
    expect(fizzBuzz(5)).toEqual('Buzz')
  });
  it('Prints FizzBuzz when given 15', function() {
    expect(fizzBuzz(15)).toEqual('FizzBuzz')
  }); 
  it('Print the number when given 4', function() {
    expect(fizzBuzz(4)).toEqual('4')
  });
});