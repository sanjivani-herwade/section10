// product --> Object.prototype --> null
const product = new Object({
    name: 'the war of art'
})

    Object.prototype.someNewMethod = () => 'this is the new function'

// hasOwnProperty
console.log(product.someNewMethod())
console.log(product)
-----------------------------------------------------------------------------------------------

// primitive value: string, number, boolean, null, undefined
// Object: myObject --> Object.prototype --> null
// Array: myArray --> Function.prototype --> Object.prototype --> null
// String: myFunction --> String.prtotype --> Object.prototype --> null
// Number: myFunction --> Number.prtotype --> Object.prototype --> null
// Boolean: myFunction --> Boolean.prtotype --> Object.prototype --> null


const product = 'computer'
console.log(product)

const otherProduct = new String('phone')
console.log(otherProduct)
