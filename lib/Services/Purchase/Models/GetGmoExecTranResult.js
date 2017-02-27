"use strict";
const CommonUtil = require("../../../Common/Util/Util");
/**
 * 代行会社決済実行呼出out
 * @class
 */
class GetGmoExecTranResult {
    constructor() {
        this.acsKbn = ''; // 本人認証サービス対応区分
        this.acsurl = ''; // 本人認証パスワード入力画面URL
        this.pareq = ''; // 本人認証要求電文
        this.md = ''; // 取引ＩＤ
        this.forwardCd = ''; // 仕向先会社コード
        this.tranDt = ''; // 決済日時(形式：20160518133125)
        this.approveNo = ''; // 決済承認番号
        this.tranId = ''; // トランザクションＩＤ(形式1605181331111111111111878508：)
        this.auaccssId = ''; // au取引ID
        this.autkn = ''; // auトークン
        this.austrtUrl = ''; // au支払手続きインターフェイスURL
        this.docomoaccssId = ''; // ドコモ取引ID
        this.docomotkn = ''; // ドコモトークン
        this.docomostrtUrl = ''; // ドコモ支払手続きインターフェイスURL
        this.kssierrrshriTyp = ''; // 決済エラー種類区分
        this.kssierrrmssgTxt = ''; // 決済エラーメッセージ本文
    }
    // tslint:disable-next-line:function-name
    static parse(resultObject) {
        const result = new GetGmoExecTranResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        });
        return result;
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GetGmoExecTranResult;
