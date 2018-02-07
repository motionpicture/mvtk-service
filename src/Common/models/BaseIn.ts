export default class BaseIn {
    constructor(initials?: Object) {
        if (initials) {
            for (let property in initials) {
                // TODO 余計なプロパティ除外したいが、チェックできない
                // if (this.hasOwnProperty(property)) {
                    this[property] = initials[property];
                // }
            }
        }
    }
}
