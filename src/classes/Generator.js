"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var Generator = /** @class */ (function () {
    function Generator() {
    }
    Generator.prototype.generateKey = function () {
        return (0, crypto_1.randomBytes)(32).toString('hex');
    };
    Generator.prototype.generateHmac = function (key, data) {
        var hmac = (0, crypto_1.createHmac)('sha256', key);
        hmac.update(data);
        return hmac.digest('hex');
    };
    return Generator;
}());
exports.default = Generator;
