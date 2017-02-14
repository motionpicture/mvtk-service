/**
 * ベースモデル
 */
// tslint:disable-next-line:no-stateless-class
export default class BaseIn {

    constructor(initials?: Object) {
        if (initials) {
            Object.keys(initials).forEach((property) => {
                (<any>this)[property] = (<any>initials)[property];
            });
        }
    }
}
