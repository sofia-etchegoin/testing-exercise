//index.test.js

import { describe, test, it, expect } from 'vitest'
import { basicArithmetic } from './index.js'

//Test 1

describe('Test 1: Addition', () => {
  it('should add two numbers correctly', () => {
    //ARRANGE
    const expected = 10
    //ACT
    const result = basicArithmetic(3, 7, 'add')
    //ASSERT
    expect(result).toBe(expected)
  })
})

//Test 2
describe('Test 2: Subtraction', () => {
  it('should subtract two numbers correctly', () => {
    //ARRANGE
    const expected = 6
    //ACT
    const result = basicArithmetic(10, 4, 'subtract')
    //ASSERT
    expect(result).toBe(expected)
  })
})

//Test 3
describe('Test 3: Throw error', () => {
  it("should throw an error with the 'multiply' operator", () => {
    //ACT & ASSERT
    expect(() => basicArithmetic(2, 6, 'multiply')).to.throw(
      'Unsupported operator'
    )
  })
})
