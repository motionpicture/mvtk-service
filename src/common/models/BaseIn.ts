/**
 * BaseIn
 */
// tslint:disable-next-line:no-stateless-class no-unnecessary-class
export class BaseIn {
    constructor(initials?: Object) {
        if (initials !== undefined) {
            for (const property in initials) {
                // tslint:disable-next-line:no-suspicious-comment
                // TODO 余計なプロパティ除外したいが、チェックできない
                // if (this.hasOwnProperty(property)) {
                    (<any>this)[property] = (<any>initials)[property];
                // }
            }
        }
    }
}
