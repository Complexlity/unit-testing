import {capitalize, reverse, calculator, isFloat, caesar, analyzeArray } from './test-exercise.js'

let add = calculator.add
let subtract = calculator.subtract
let divide = calculator.divide
let multiply = calculator.multiply
let arr = [1, 22, 4, 13, 21,50, 6, 11 ]

test('Should Capitalize String', () => {
    expect(capitalize('hello')).toBe('Hello')
})

test('Should reverse string', () => {
    expect(reverse('Elijah')).toBe('hajilE')
})

test('Should Add two numbers', () => {
    expect(add(1, 2)).toBe(3)
})

test('Should Subtract two numbers', () => {
    expect(subtract(17, 12)).toBe(5)
})

test('Should subtract to negative', () => {
    expect(subtract(12, 18)).toBeLessThan(0)
})

test('Should divide to positive', () => {
    expect(divide(12, 6)).toBe(2)
})

test('Should divide to float', () => {
    expect(isFloat(divide(10, 33))).toBe(true)
})

test('Should throw zero division error', () => {
    expect(divide(5, 0)).toBeUndefined()
})

test('Should multiply two numbers', () => {
    expect(multiply(2, 6)).toBe(12)
})


test('works for all upper case letters', () => {
    expect(caesar('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 4)).toBe('EFGHIJKLMNOPQRSTUVWXYZABCD');
  });
  test('works with lower case letters', () => {
    expect(caesar('abcdefghijklmnopqrstuvwxyz', 25)).toBe('zabcdefghijklmnopqrstuvwxy');
  });
  test('works with phrases', () => {
    expect(caesar('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
  });

  test('Retains punctuations', () => {
    expect(caesar('And!! when?', 1)).toBe('Boe!! xifo?')
  })

  test('works with negative shift', () => {
    expect(caesar('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
  });
  
  test('wraps', () => {
    expect(caesar('Z', 1)).toBe('A');
  });
  
  test('works with large shift factors', () => {
    expect(caesar('Hello, World!', 75)).toBe('Ebiil, Tloia!');
  });
  test('works with large negative shift factors', () => {
    expect(caesar('Hello, World!', -29)).toBe('Ebiil, Tloia!');
  })

  test('Should return object', () => {
    expect(typeof analyzeArray(arr)).toBe('object')
  })

  test('Should run necessary calculations', () => {
    expect(analyzeArray(arr)).toEqual({
        average:16,
        min:1, 
        max:50,
        length:8
    })
  })