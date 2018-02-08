"use strict";
const BaseIn_1 = require("../../../common/models/BaseIn");
class GiftCardCancelIn extends BaseIn_1.default {
    toXml() {
        // パラメータの順序が異なるとエラーになるので注意
        let message = `
<tns:GiftCardCancel>
    <tns:IN_PARAMETER>
        <q3:MVTKGFTCRD_INFO_IN>
`;
        for (let info of this.MVTKGFTCRD_INFO_IN.MvtkGftcrdCancelInfo) {
            message += `
            <q3:MvtkGftcrdCancelInfo>
                <q3:MVTKGFTCRD_ID>${info.MVTKGFTCRD_ID}</q3:MVTKGFTCRD_ID>
                <q3:MVTKGFTCRDPIN_CD>${info.MVTKGFTCRDPIN_CD}</q3:MVTKGFTCRDPIN_CD>
                <q3:GFTCRDKSSIKNR_NO>${info.GFTCRDKSSIKNR_NO}</q3:GFTCRDKSSIKNR_NO>
                <q3:RYUKNGK>${info.RYUKNGK}</q3:RYUKNGK>
`;
            if (info.SYRYKY_DT) {
                message += `
                <q3:SYRYKY_DT>${info.SYRYKY_DT}</q3:SYRYKY_DT>
`;
            }
            message += `
            </q3:MvtkGftcrdCancelInfo>
`;
        }
        message += `
        </q3:MVTKGFTCRD_INFO_IN>
`;
        message += `
        <q3:TRKSH_TYP>${this.TRKSH_TYP}</q3:TRKSH_TYP>
        <q3:DVC_TYP>${this.DVC_TYP}</q3:DVC_TYP>
        <q3:SKHN_CD>${this.SKHN_CD}</q3:SKHN_CD>
        <q3:KSSIKNR_NO>${this.KSSIKNR_NO}</q3:KSSIKNR_NO>
    </tns:IN_PARAMETER>
</tns:GiftCardCancel>
`;
        return message;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GiftCardCancelIn;
