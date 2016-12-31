/**
 * Created by muhammed on 17/12/16.
 *
 * This script imports a custom module and use it.
 * Run this with -> node module.js
 */

var math = require('./custom_node_modules/math');

var numbers = {
    num1: 10,
    num2: 20
};

var sum = math.sum(numbers.num1, numbers.num2);
console.log('Sum of ', numbers.num1, ' and ', numbers.num2, ' is ', sum);

var product = math.multiply(numbers.num1, numbers.num2);
console.log('Product of ', numbers.num1, ' and ', numbers.num2, ' is ', product);
