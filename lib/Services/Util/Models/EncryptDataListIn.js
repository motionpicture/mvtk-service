"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseIn_1 = require("../../../common/models/BaseIn");
class EncryptDataListIn extends BaseIn_1.default {
    toXml() {
        let message = `
<tns:EncryptDataList>
    <tns:list>

`;
        for (let data of this.list) {
            message += `
        <q13:string>${data}</q13:string>
`;
        }
        message += `
    </tns:list>
</tns:EncryptDataList>
`;
        return message;
    }
}
exports.default = EncryptDataListIn;
