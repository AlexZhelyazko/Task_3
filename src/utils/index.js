"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateArguments = void 0;
function validateArguments(args) {
    var length = args.length;
    var isError = length < 3 || length % 2 === 0 || new Set(args).size !== length;
    if (isError) {
        console.error("Invalid arguments! Please provide an odd number of unique moves.");
        console.log("Example: node game.js 1 2 3");
    }
    return !isError;
}
exports.validateArguments = validateArguments;
