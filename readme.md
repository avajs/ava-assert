# ava-assert [![Build Status](https://travis-ci.org/avajs/ava-assert.svg?branch=master)](https://travis-ci.org/avajs/ava-assert) [![Coverage Status](https://coveralls.io/repos/github/avajs/ava-assert/badge.svg?branch=master)](https://coveralls.io/github/avajs/ava-assert?branch=master)

> The core assertion library for [AVA](https://ava.li)

**DON'T USE THIS**


## Install

```
$ npm install --save ava-assert
```


## Usage

```js
const avaAssert = require('ava-assert');

avaAssert.is(1 + 1, 2);
```


## API

### `.pass([message])`

Passing assertion.

### `.fail([message])`

Failing assertion.

### `.truthy(value, [message])`

Assert that `value` is truthy.

### `.falsy(value, [message])`

Assert that `value` is falsy.

### `.true(value, [message])`

Assert that `value` is `true`.

### `.false(value, [message])`

Assert that `value` is `false`.

### `.is(value, expected, [message])`

Assert that `value` is equal to `expected`.

### `.not(value, expected, [message])`

Assert that `value` is not equal to `expected`.

### `.deepEqual(value, expected, [message])`

Assert that `value` is deep equal to `expected`.

### `.notDeepEqual(value, expected, [message])`

Assert that `value` is not deep equal to `expected`.

### `.throws(function|promise, [error, [message]])`

Assert that `function` throws an error, or `promise` rejects with an error.

`error` can be a constructor, regex, error message or validation function.

Returns the error thrown by `function` or the rejection reason of `promise`.

### `.notThrows(function|promise, [message])`

Assert that `function` doesn't throw an `error` or `promise` resolves.

### `.regex(contents, regex, [message])`

Assert that `contents` matches `regex`.

### `.notRegex(contents, regex, [message])`

Assert that `contents` does not match `regex`.

### `.ifError(error, [message])`

Assert that `error` is falsy.


## License

MIT © [James Talmage](https://ava.li)
