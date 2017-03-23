"use strict";
const BaseIn_1 = require("../../../Common/models/BaseIn");
/**
 * 暗号化（配列）out
 * @class
 * @extends {BaseIn}
 */
class EncryptDataListIn extends BaseIn_1.default {
    toXml() {
        // tslint:disable-next-line:no-multiline-string
        let message = `
<tns:EncryptDataList>
    <tns:list>

`;
        for (const data of this.list) {
            message += `
        <q13:string>${data}</q13:string>
`;
        }
        // tslint:disable-next-line:no-multiline-string
        message += `
    </tns:list>
</tns:EncryptDataList>
`;
        return message;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EncryptDataListIn;
