const capitalize = (str) =>  str.charAt(0).toUpperCase() + str.slice(1);

function reverse(str){
    let arr = str.split('')
    return arr.reverse().join('')
}

let calculator = (function() {
    function add(a, b){
        return a + b
    }

    function subtract(a, b){
        return a - b
    }

    function divide(a,b){
        if(b == 0) {
            return undefined
        }
            return a/b
    }

    function multiply(a,b){
        return a * b
    }
    return {
        add, subtract, divide, multiply

    }

})()



function isFloat(value) {
    if (
      typeof value === 'number' &&
      !Number.isNaN(value) &&
      !Number.isInteger(value)
    ) {
      return true;
    }
  
    return false;
  }

  function caesar(myString, key) {
        key = (key + 26) % 26
        let newString = ''
        for (let char of  myString) {
           newString += shiftby(char, key) 
        }
      return newString
    };
    
    function shiftby(character, key){
        if (character.match(/[^a-z]/i)) return character
        let asciiNumber = character.charCodeAt(0)
        let cap = 90;
        if (character.toLowerCase() === character) cap = 122
        let newAsciiNumber = asciiNumber + key;
        if ( newAsciiNumber > cap) newAsciiNumber -= 26
        return  String.fromCharCode(newAsciiNumber)
    }
     
    function analyzeArray(arr){
        let length = arr.length
        let min = Math.min(...arr)
        let max = Math.max(...arr)
        let sum = arr.reduce((prev, current) => prev + current, 0)
        let average = sum/length
        return { average, min, max, length }
    }

    let arr  = [1,344,5454, 2,1,5,34]
    let objects = analyzeArray(arr)
    console.log(objects)

export { capitalize, reverse, calculator, isFloat, caesar, analyzeArray}