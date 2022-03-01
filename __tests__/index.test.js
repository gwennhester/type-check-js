const typecheck = require('../index');

describe('isString()', () => {
    test('it should return true if given a valid string', () => {
        const newString = new String('hello');
        expect(typecheck.isString('hello')).toBe(true);
        expect(typecheck.isString(newString)).toBe(true);
    });
    
    test('it should return false if given an invalid string', () => {
        expect(typecheck.isString('hello')).toBe(true);
    });
});

describe('isNumber()', () => {
    test('it should return true if given a valid number', () => {
        expect(typecheck.isNumber(1234)).toBe(true);
    });

    test('it should return true if given an invalid number', () => {
        expect(typecheck.isNumber('1234')).toBe(false);
    });
});

describe('isArray()', () => {
    test('it should return true if given an array', () => {
        expect(typecheck.isArray([1, 2, 3])).toBe(true);
    });

    test('it should return false if given an invalid array', () => {
        expect(typecheck.isArray('hello')).toBe(false);
    });
});

describe('isFunction()', () => {
    test('it should return true if given a function', () => {
        expect(typecheck.isFunction(() => {})).toBe(true);
    });

    test('it should return false if given an invalid function', () => {
        expect(typecheck.isFunction('hello')).toBe(false);
    });
});

describe('isObject()', () => {
    test('it should return true if given an object', () => {
        expect(typecheck.isObject({k:'value'})).toBe(true);
    });

    test('it should return false if given an invalid object', () => {
        expect(typecheck.isObject('hello')).toBe(false);
    });
});

describe('isNull()', () => {
    test('it should return true if given a null value', () => {
        expect(typecheck.isNull(null)).toBe(true);
    });

    test('it should return false if given a non null value', () => {
        expect(typecheck.isNull('hello')).toBe(false);
    });
});

describe('isUndefined()', () => {
    test('it should return true if given an undefined value', () => {
        expect(typecheck.isUndefined(undefined)).toBe(true);
    });

    test('it should return false if given a non undefined value', () => {
        expect(typecheck.isUndefined('hello')).toBe(false);
    });
});

describe('isBoolean()', () => {
    test('it should return true if given a boolean value', () => {
        expect(typecheck.isBoolean(true)).toBe(true);
        expect(typecheck.isBoolean(false)).toBe(true);
    });

    test('it should return false if given a non boolean value', () => {
        expect(typecheck.isBoolean('hello')).toBe(false);
    });
});

describe('isRegExp()', () => {
    test('it should return true if given a regexp value', () => {
        const regex = new RegExp('\\w+');
        expect(typecheck.isRegExp(regex)).toBe(true);
    });

    test('it should return false if given a non regexp value', () => {
        expect(typecheck.isRegExp('hello')).toBe(false);
    });
});

describe('isError()', () => {
    test('it should return true if given an error value', () => {
        const error = new Error('hello');
        const anotherError = new Error('I was constructed via the "new" keyword!');
        expect(typecheck.isError(error)).toBe(true);
        expect(typecheck.isError(anotherError)).toBe(true);
    });

    test('it should return false if given a non error value', () => {
        expect(typecheck.isError('hello')).toBe(false);
    });
});

describe('isDate()', () => {
    test('it should return true if given a date value', () => {
        const date = new Date();
        expect(typecheck.isDate(date)).toBe(true);
    });

    test('it should return false if given a non date value', () => {
        expect(typecheck.isDate('hello')).toBe(false);
    });
});

describe('isSymbol()', () => {
    test('it should return true if given a symbol value', () => {
        const symbol = Symbol();
        expect(typecheck.isSymbol(symbol)).toBe(true);
    });

    test('it should return false if given a non symbol value', () => {
        expect(typecheck.isSymbol('hello')).toBe(false);
    });
});