"use strict";
const BaseIn_1 = require("../../../Common/models/BaseIn");
/**
 * 一時管理テーブル（情報）削除inクラス
 * @class
 * @extends {BaseIn}
 */
class DeleteIchjknrInfoIn extends BaseIn_1.default {
    constructor() {
        super(...arguments);
        this.accessIdList = null; // 取引ＩＤリスト
    }
    toXml() {
        // tslint:disable-next-line:no-multiline-string
        let message = `
<tns:DeleteIchjknr>
    <tns:model>

`;
        if (this.accessIdList) {
            for (const accessId of this.accessIdList) {
                message += `
    <q25:string>${accessId}</q25:string>
`;
            }
        }
        // tslint:disable-next-line:no-multiline-string
        message += `
    </tns:model>
</tns:DeleteIchjknr>
`;
        return message;
    }
}
exports.DeleteIchjknrInfoIn = DeleteIchjknrInfoIn;
