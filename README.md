# data-type-check-js
A simple data type checks in Javascript.

## Introduction

To check what data type something has in javascript is not always the easiest.
The language itself provides an operator called typeof for that which works in a straightforward way.
Typeof returns a string of what a values data type is, so for an object "object" is returned and for a string "string".

## Installation

Run

```cli 
npm install data-type-check-js
```

## Example

```javascript
const typecheck = require('data-type-check-js');

// isString()
const isStringTrue = typecheck.isString('hello');
// isStringTrue === true -> true

// isString()
const isStringFalse = typecheck.isString(123);
// isStringFalse === true -> false

```

## Usage

```javascript
const typecheck = require('data-type-check-js');

/**
 * Returns true if a value is a string.
 * A string is always a string so this one is easy.
 * Except if called with new (new String) typeof will instead return "object".
 * So to also include those strings instanceof can be used.
 */
typecheck.isString(value);

/**
 * Returns true if a value is really a number.
 * From typeof more things than just an ordinary number will return "number" like NaN and Infinity.
 * To know if a value really is a number the function isFinite is also required.
 */
typecheck.isNumber(value);

/**
 * Returns true if a value is an array.
 * In javascript arrays are not true arrays like in java and in other languages.
 * They're actually objects so typeof will return "object" for them.
 * To know if something's really an array its constructor can be compared to Array.
 */
typecheck.isArray(value);

/**
 * Returns true if a value is a function.
 * Functions are functions so here just typeof is enough.
 */
typecheck.isFunction(value);

/**
 * Returns true if a value is an object.
 * Many things are objects in javascript.
 * To know if a value is an object that can have properties and be looped through,
 * its constructor can be compared to Object. It doesn't work for objects created from classes,
 * then the instanceof operator can be used instead.
 */
typecheck.isObject(value);

/**
 * Returns true if a value is null.
 * Most times you don't need to check explicitly for null and
 * undefined since they're both falsy values.
 * However to do it below functions does the trick.
 */
typecheck.isNull(value);

/**
 * Returns true if a value is undefined.
 * Most times you don't need to check explicitly for null
 * and undefined since they're both falsy values.
 */
typecheck.isUndefined(value);

/**
 * Returns true if a value is a boolean.
 * For booleans typeof is enough since it returns "boolean" for both true and false.
 */
typecheck.isBoolean(value);

/**
 * Returns true if a value is a regexp.
 * RegExp's are objects so the only thing needed to check is if the constructor is RegExp.
 */
typecheck.isRegExp(value);

/**
 * Returns true if value is an error object.
 * Errors in javascript are the same as "exceptions" in many other programming languages.
 * They come in a couple different forms like for instance Error, TypeError and RangeError.
 * An instanceof statement is enough for them all,
 * but just to be extra sure we also check for the "message" property that errors have.
 */
typecheck.isError(value);

/**
 * Returns true if value is a date object.
 * Date isn't really a data type in javascript.
 * But to know if something's a Date object it can be checked with instanceof.
 */
typecheck.isDate(value);

/**
 * Returns true if a Symbol.
 * In ES6 the new datatype Symbol was added.
 * Nicely enough typeof returns "symbol" for it so no more logic is required.
 */
typecheck.isSymbol(value);

```

## Tests
```
npm run test-coverage

> @gwennhester/type-check-js@1.0.0 test-coverage /Users/gwenn/Projects/Packages/type-check-js
> jest --coverage --verbose

 PASS  __tests__/index.test.js
  isString()
    ✓ it should return true if given a valid string (1 ms)
    ✓ it should return false if given an invalid string
  isNumber()
    ✓ it should return true if given a valid number
    ✓ it should return true if given an invalid number
  isArray()
    ✓ it should return true if given an array
    ✓ it should return false if given an invalid array (1 ms)
  isFunction()
    ✓ it should return true if given a function
    ✓ it should return false if given an invalid function
  isObject()
    ✓ it should return true if given an object
    ✓ it should return false if given an invalid object (1 ms)
  isNull()
    ✓ it should return true if given a null value
    ✓ it should return false if given a non null value
  isUndefined()
    ✓ it should return true if given an undefined value
    ✓ it should return false if given a non undefined value (1 ms)
  isBoolean()
    ✓ it should return true if given a boolean value
    ✓ it should return false if given a non boolean value
  isRegExp()
    ✓ it should return true if given a regexp value
    ✓ it should return false if given a non regexp value (1 ms)
  isError()
    ✓ it should return true if given an error value
    ✓ it should return false if given a non error value
  isDate()
    ✓ it should return true if given a date value
    ✓ it should return false if given a non date value (1 ms)
  isSymbol()
    ✓ it should return true if given a symbol value
    ✓ it should return false if given a non symbol value

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.js |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       24 passed, 24 total
Snapshots:   0 total
Time:        0.233 s, estimated 1 s
Ran all test suites.
```

## Reference
https://webbjocke.com/javascript-check-data-types/
