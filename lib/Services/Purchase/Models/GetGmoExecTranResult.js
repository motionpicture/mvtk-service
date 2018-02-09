"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
/**
 * GetGmoExecTranResult
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
    static parse(resultObject) {
        const result = new GetGmoExecTranResult();
        for (const propertyName in resultObject) {
            const normalizedName = Util_1.Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
}
exports.GetGmoExecTranResult = GetGmoExecTranResult;
