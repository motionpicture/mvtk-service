"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Util_1 = require("../../../common/util/Util");
class SelectIchjknrInfoResult {
    constructor() {
        this.accessId = ''; // 取引ID
        this.accessPwd = ''; // 取引パスワード
        this.tknId = ''; // トークンID
        this.kssiknrNo = ''; // 決済管理番号
        this.hyjcrdNo = ''; // 表示カード番号
        this.crdjhhjFlg = ''; // カード情報保持フラグ
        this.crdmignnNm = ''; // カード名義人名称
        this.knyshCd = ''; // 購入者コード
        this.kiinFlg = ''; // 会員フラグ
        this.knyshsiNm = ''; // 購入者姓名称
        this.knyshmiNm = ''; // 購入者名名称
        this.knyshsiKnnm = ''; // 購入者姓カナ名称
        this.knyshmiKnnm = ''; // 購入者名カナ名称
        this.knyshpcMladdr = ''; // 購入者PCメールアドレス
        this.knyshkitiMladdr = ''; // 購入者携帯メールアドレス
        this.knyshshgikykNo = ''; // 購入者市外局番号
        this.knyshshnikykNo = ''; // 購入者市内局番号
        this.knyshknyshNo = ''; // 購入者加入者番号
        this.mlsfFlg = ''; // メール送付フラグ
        this.skhnCd = ''; // 作品コード
        this.skhnNm = ''; // 作品名称
        this.knshknknrNo = ''; // 鑑賞券管理番号
        this.azkrknshhriskTyp = ''; // 預り金支払タイミング区分
        this.azkrknshhritmngTyp = ''; // 預り金支払先区分
        this.thredmgndiknUnip = ''; // 3Dメガネ代金単価
        this.hmbijthredmgndiknshhriskTyp = ''; // 販売時3Dメガネ代金支払先区分
        this.knshknknrmisiNo = ''; // 鑑賞券管理明細番号
        this.knymiNum = ''; // 購入枚数
        this.shhziTyp = ''; // 消費税区分
        this.shhziRt = ''; // 消費税率
        this.shhziUnip = ''; // 消費税単価
        this.mvitckthikyftntsuryUnip = ''; // ムビチケ配給負担手数料単価
        this.mvitcktkgyftntsuryUnip = ''; // ムビチケ興行負担手数料単価
        this.mvitcktusrtsuryUnip = ''; // ムビチケユーザー手数料単価
        this.knshknhmbiUnip = ''; // 鑑賞券販売単価
        this.pstrgzUrl = ''; // ポスター画像URL
        this.shknhikygishCd = ''; // 主幹配給会社コード
        this.eishhshkTyp = ''; // 映写方式区分
        this.knshTyp = ''; // 券種区分
        this.knshkbnNm = ''; // 券種区分名称
    }
    static parse(resultObject) {
        let result = new SelectIchjknrInfoResult();
        for (let propertyName in resultObject) {
            let normalizedName = Util_1.default.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];
            result[normalizedName] = property;
        }
        return result;
    }
}
exports.default = SelectIchjknrInfoResult;
