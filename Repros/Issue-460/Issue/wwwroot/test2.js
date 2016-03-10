define(["require", "exports", "Core"], function (require, exports, core) {
    QUnit.module("Core");
    test("will return correct version from core", function () {
        var version = core.version;
        equal(version, 8);
    });
    test("will fail", function () {
        var version = core.version;
        equal(version, 8);
    });
});
