"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Generator_1 = require("./classes/Generator");
var Rules_1 = require("./classes/Rules");
var Table_1 = require("./classes/Table");
var Game_1 = require("./classes/Game");
var utils_1 = require("./utils");
var args = process.argv.slice(2);
function main(args) {
    if ((0, utils_1.validateArguments)(args)) {
        var moves = args;
        var generator = new Generator_1.default();
        var rules = new Rules_1.default(moves);
        var table = new Table_1.default(moves, rules);
        var game = new Game_1.default(moves, generator, rules, table);
        game.playGame();
    }
}
main(args);
