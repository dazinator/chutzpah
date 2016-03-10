/// <reference path="../typings/qunit/qunit.d.ts" />
/// <reference path="../typings/requirejs/require.d.ts" />

import core = require("Core");

QUnit.module("Core");

test("will return correct version from core", function () {
    var version = core.version;
    equal(version, 8);
});


test("will fail", function () {
    var version = core.version;
    equal(version, 8);
});




