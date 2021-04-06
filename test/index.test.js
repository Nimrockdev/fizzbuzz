/* eslint-disable no-undef */
const fizzbuzz = require('../index')

describe('fizzbuzz',()=>{

  test('should print 1 if they recive 1', () => {
    const expected = 1
    const result = fizzbuzz(1)
    expect(expected).toBe(result)
  })
  test('should print 2 if they recive 2', () => {
    const expected = 2
    const result = fizzbuzz(2)
    expect(expected).toBe(result)
  })
  test('should print fizz if they recive multiple of 3', () => {
    const expected = 'fizz'
    const result = fizzbuzz(3)
    expect(expected).toBe(result)
  })
  test('should print buzz if they recive multiple of 5', () => {
    const expected = 'buzz'
    const result = fizzbuzz(5)
    expect(expected).toBe(result)
  })
  test('should print fizzbuzz if they recive multiple of 3 and 5', () => {
    const expected = 'fizzbuzz'
    const result = fizzbuzz(15)
    expect(expected).toBe(result)
  })
  test('should print Error...  if they recive is not NUMBER', () => {
    const expected = 'Error, the argument is not a number'
    const result = fizzbuzz('a')
    expect(expected).toBe(result)
  })

})