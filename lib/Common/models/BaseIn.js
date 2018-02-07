"use strict";
class BaseIn {
    constructor(initials) {
        if (initials) {
            for (let property in initials) {
                // TODO 余計なプロパティ除外したいが、チェックできない
                // if (this.hasOwnProperty(property)) {
                this[property] = initials[property];
            }
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseIn;
