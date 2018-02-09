"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseIn_1 = require("../../../common/models/BaseIn");
class RegisterMemberTemporaryIn extends BaseIn_1.default {
    toXml() {
        let message = `
<tns:RegisterMemberTemporary>
    <tns:kiinsiNm>${this.kiinsiNm}</tns:kiinsiNm>
    <tns:kiimmiNm>${this.kiimmiNm}</tns:kiimmiNm>
    <tns:kiinsiKnnm>${this.kiinsiKnnm}</tns:kiinsiKnnm>
    <tns:kiimmiKnnm>${this.kiimmiKnnm}</tns:kiimmiKnnm>
    <tns:sibtsTyp>${this.sibtsTyp}</tns:sibtsTyp>
    <tns:kiinsiYmd>${this.kiinsiYmd}</tns:kiinsiYmd>
    <tns:tdfknCd>${this.tdfknCd}</tns:tdfknCd>
    <tns:kiinjshiDo>${this.kiinjshiDo}</tns:kiinjshiDo>
    <tns:kiinjshkiDo>${this.kiinjshkiDo}</tns:kiinjshkiDo>
    <tns:kiinshgikykNo>${this.kiinshgikykNo}</tns:kiinshgikykNo>
    <tns:kiinshnikykNo>${this.kiinshnikykNo}</tns:kiinshnikykNo>
    <tns:kiinknyshNo>${this.kiinknyshNo}</tns:kiinknyshNo>
    <tns:kiinMladdr>${this.kiinMladdr}</tns:kiinMladdr>
    <tns:kiinmladdrssdvcTyp>${this.kiinmladdrssdvcTyp}</tns:kiinmladdrssdvcTyp>
    <tns:kiinPwd>${this.kiinPwd}</tns:kiinPwd>
    <tns:mlmgkbFlg>${this.mlmgkbFlg}</tns:mlmgkbFlg>
    <tns:kiintrkdvcTyp>${this.kiintrkdvcTyp}</tns:kiintrkdvcTyp>
</tns:RegisterMemberTemporary>
`;
        return message;
    }
}
exports.default = RegisterMemberTemporaryIn;
