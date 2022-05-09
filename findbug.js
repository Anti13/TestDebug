var FindBug = /** @class */ (function () {
    function FindBug() {
    }
    FindBug.prototype.findBugg = function (bug) {
        console.log("Finding this ".concat(bug, " on my program!"));
    };
    return FindBug;
}());
var bugs = new FindBug();
console.log(bugs.findBugg('Mercedes'));
//# sourceMappingURL=findbug.js.map