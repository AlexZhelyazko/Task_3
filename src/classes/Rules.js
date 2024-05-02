"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("../enums");
var Rules = /** @class */ (function () {
    function Rules(moves) {
        this.moves = moves;
    }
    Rules.prototype.isValidMove = function (move) {
        var moveIndex = parseInt(move.toString());
        return this.isNumeric(moveIndex) && this.isWithinRange(moveIndex);
    };
    Rules.prototype.isNumeric = function (value) {
        return !isNaN(value);
    };
    Rules.prototype.isWithinRange = function (value) {
        return value >= 1 && value <= this.moves.length;
    };
    Rules.prototype.determineWinner = function (userMove, computerMove) {
        var userIndex = this.moves.indexOf(userMove);
        var computerIndex = this.moves.indexOf(computerMove);
        var length = this.moves.length;
        switch (computerIndex) {
            case userIndex:
                return enums_1.Results.Draw;
            case (userIndex + 1) % length:
            case (userIndex + ~~(length / 2)) % length:
                return enums_1.Results.Lose;
            default:
                return enums_1.Results.Win;
        }
    };
    return Rules;
}());
exports.default = Rules;
