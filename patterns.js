// power-assert patterns

module.exports.ENHANCED = [
	't.truthy(value, [message])',
	't.falsy(value, [message])',
	't.true(value, [message])',
	't.false(value, [message])',
	't.is(value, expected, [message])',
	't.not(value, expected, [message])',
	't.deepEqual(value, expected, [message])',
	't.notDeepEqual(value, expected, [message])',
	't.regex(contents, regex, [message])',
	't.notRegex(contents, regex, [message])',
	// deprecated
	't.ok(value, [message])',
	't.notOk(value, [message])',
	't.same(value, expected, [message])',
	't.notSame(value, expected, [message])'
];

module.exports.NOT_ENHANCED = [
	't.pass([message])',
	't.fail([message])',
	't.throws(fn, [message])',
	't.notThrows(fn, [message])',
	't.ifError(error, [message])',
	// deprecated
	't.doesNotThrow(fn, [message])',
	't.error(error, [message])'
];
