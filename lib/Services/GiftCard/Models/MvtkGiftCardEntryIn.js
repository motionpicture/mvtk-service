"use strict";
const BaseIn_1 = require("../../../common/models/BaseIn");
class MvtkGiftCardEntryIn extends BaseIn_1.default {
    toXml() {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:MvtkGiftCardEntry>
    <tns:MVTKGFTCRD_INFO_IN>
`;
        for (let info of this.MVTKGFTCRD_INFO_IN.MvtkgftcrdInfoIn) {
            message += `
        <q4:MvtkgftcrdInfoIn>
            <q4:GFTCRDKSSIKNR_NO>${info.GFTCRDKSSIKNR_NO}</q4:GFTCRDKSSIKNR_NO>
            <q4:MVTKGFTCRDPIN_CD>${info.MVTKGFTCRDPIN_CD}</q4:MVTKGFTCRDPIN_CD>
            <q4:MVTKGFTCRD_ID>${info.MVTKGFTCRD_ID}</q4:MVTKGFTCRD_ID>
            <q4:RYUKNGK>${info.RYUKNGK}</q4:RYUKNGK>
        </q4:MvtkgftcrdInfoIn>
`;
        }
        message += `
    </tns:MVTKGFTCRD_INFO_IN>
    <tns:DVC_TYP>${this.DVC_TYP}</tns:DVC_TYP>
</tns:MvtkGiftCardEntry>
`;
        return message;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MvtkGiftCardEntryIn;
