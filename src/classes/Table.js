"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var CliTable = require('cli-table');
var Table = /** @class */ (function () {
    function Table(moves, rules) {
        this.results = ['Draw', 'Win', 'Lose'];
        this.moves = moves;
        this.rules = rules;
        this.table = this.generateTable();
    }
    Table.prototype.generateTable = function () {
        var _this = this;
        var table = new CliTable();
        table.push(__spreadArray(['Moves'], this.moves, true));
        this.moves.forEach(function (userMove) {
            var row = _this.generateRow(userMove);
            table.push(row);
        });
        return table;
    };
    Table.prototype.generateRow = function (userMove) {
        var _this = this;
        var row = [userMove];
        var cells = this.moves.map(function (computerMove) { return _this.generateCell(userMove, computerMove); });
        row.push.apply(row, cells);
        return row;
    };
    Table.prototype.generateCell = function (userMove, computerMove) {
        var winner = this.rules.determineWinner(userMove, computerMove);
        return this.results[winner];
    };
    Table.prototype.printTable = function () {
        console.log(this.table.toString());
    };
    return Table;
}());
exports.default = Table;
