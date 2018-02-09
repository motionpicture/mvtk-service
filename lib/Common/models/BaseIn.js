"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * BaseIn
 */
// tslint:disable-next-line:no-stateless-class no-unnecessary-class
class BaseIn {
    constructor(initials) {
        if (initials !== undefined) {
            for (const property in initials) {
                // tslint:disable-next-line:no-suspicious-comment
                // TODO 余計なプロパティ除外したいが、チェックできない
                // if (this.hasOwnProperty(property)) {
                this[property] = initials[property];
                // }
            }
        }
    }
}
exports.BaseIn = BaseIn;
