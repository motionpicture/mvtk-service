"use strict";
/**
 * ベースモデル
 */
// tslint:disable-next-line:no-stateless-class
class BaseIn {
    constructor(initials) {
        if (initials) {
            Object.keys(initials).forEach((property) => {
                this[property] = initials[property];
            });
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseIn;
