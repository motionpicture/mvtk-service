"use strict";
const BaseIn_1 = require("../../../common/models/BaseIn");
class DeleteIchjknrInfoIn extends BaseIn_1.default {
    constructor() {
        super(...arguments);
        this.accessIdList = null; // 取引ＩＤリスト
    }
    toXml() {
        let message = `
<tns:DeleteIchjknr>
    <tns:model>

`;
        for (let accessId of this.accessIdList) {
            message += `
    <q25:string>${accessId}</q25:string>
`;
        }
        message += `
    </tns:model>
</tns:DeleteIchjknr>
`;
        return message;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeleteIchjknrInfoIn;
