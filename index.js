/**
 * A string is always a string so this one is easy.
 * Except if called with new (new String) typeof will instead return "object".
 * So to also include those strings instanceof can be used.
 * @param {*} value 
 * @returns {boolean} true if value is a string
 */
module.exports.isString = value => typeof value === 'string' || value instanceof String;

/**
 * From typeof more things than just an ordinary number will return "number" like NaN and Infinity.
 * To know if a value really is a number the function isFinite is also required.
 * @param {*} value 
 * @returns {boolean} true if the value is a number
 */
module.exports.isNumber = value => typeof value === 'number' && Number.isFinite(value);

/**
 * In javascript arrays are not true arrays like in java and in other languages.
 * They're actually objects so typeof will return "object" for them.
 * To know if something's really an array its constructor can be compared to Array.
 * @param {*} value 
 * @returns {boolean} true if value is an array
 */
module.exports.isArray = value => value && typeof value === 'object' && value.constructor === Array;

/**
 * Functions are functions so here just typeof is enough.
 * @param {*} value 
 * @returns {boolean} true if value is a function
 */
module.exports.isFunction = value => typeof value === 'function';

/**
 * Many things are objects in javascript.
 * To know if a value is an object that can have properties and be looped through,
 * its constructor can be compared to Object. It doesn't work for objects created from classes,
 * then the instanceof operator can be used instead.
 * @param {*} value 
 * @returns {boolean} true if value is an object
 */
module.exports.isObject = value => value && typeof value === 'object' && value.constructor === Object;

/**
 * Most times you don't need to check explicitly for null and
 * undefined since they're both falsy values.
 * However to do it below functions does the trick.
 * @param {*} value 
 * @returns {boolean} true if value is null or null
 */
module.exports.isNull = value => value === null;

/**
 * Most times you don't need to check explicitly for null
 * and undefined since they're both falsy values.
 * @param {*} value 
 * @returns {boolean} true if value is undefined
 */
module.exports.isUndefined = value => typeof value === 'undefined';

/**
 * For booleans typeof is enough since it returns "boolean" for both true and false.
 * @param {*} value 
 * @returns {boolean} true if value is a boolean
 */
module.exports.isBoolean = value => typeof value === 'boolean';

/**
 * RegExp's are objects so the only thing needed to check is if the constructor is RegExp.
 * @param {*} value 
 * @returns {boolean} true if value is a regexp
 */
module.exports.isRegExp = value => value && typeof value === 'object' && value.constructor === RegExp;

/**
 * Errors in javascript are the same as "exceptions" in many other programming languages.
 * They come in a couple different forms like for instance Error, TypeError and RangeError.
 * An instanceof statement is enough for them all,
 * but just to be extra sure we also check for the "message" property that errors have.
 * @param {*} value 
 * @returns {boolean} true if value is an error object
 */
module.exports.isError = value => value instanceof Error && typeof value.message !== 'undefined';

/**
 * Date isn't really a data type in javascript.
 * But to know if something's a Date object it can be checked with instanceof.
 * @param {*} value 
 * @returns {boolean} true if value is a date object
 */
module.exports.isDate = value => value instanceof Date;

/**
 * In ES6 the new datatype Symbol was added.
 * Nicely enough typeof returns "symbol" for it so no more logic is required.
 * @param {*} value 
 * @returns {boolean} true if value is a symbol
 */
module.exports.isSymbol = value => typeof value === 'symbol';
