import CommonUtil from '../../../common/util/Util';

export default class SelectIchjknrInfoResult {
    public accessId: string = ''; // 取引ID
    public accessPwd: string = ''; // 取引パスワード
    public tknId: string = ''; // トークンID
    public kssiknrNo: string = ''; // 決済管理番号
    public hyjcrdNo: string = ''; // 表示カード番号
    public crdjhhjFlg: string = ''; // カード情報保持フラグ
    public crdmignnNm: string = ''; // カード名義人名称
    public knyshCd: string = ''; // 購入者コード
    public kiinFlg: string = ''; // 会員フラグ
    public knyshsiNm: string = ''; // 購入者姓名称
    public knyshmiNm: string = ''; // 購入者名名称
    public knyshsiKnnm: string = ''; // 購入者姓カナ名称
    public knyshmiKnnm: string = ''; // 購入者名カナ名称
    public knyshpcMladdr: string = ''; // 購入者PCメールアドレス
    public knyshkitiMladdr: string = ''; // 購入者携帯メールアドレス
    public knyshshgikykNo: string = ''; // 購入者市外局番号
    public knyshshnikykNo: string = ''; // 購入者市内局番号
    public knyshknyshNo: string = ''; // 購入者加入者番号
    public mlsfFlg: string = ''; // メール送付フラグ
    public skhnCd: string = ''; // 作品コード
    public skhnNm: string = ''; // 作品名称
    public knshknknrNo: string = ''; // 鑑賞券管理番号
    public azkrknshhriskTyp: string = ''; // 預り金支払タイミング区分
    public azkrknshhritmngTyp: string = ''; // 預り金支払先区分
    public thredmgndiknUnip: string = ''; // 3Dメガネ代金単価
    public hmbijthredmgndiknshhriskTyp: string = ''; // 販売時3Dメガネ代金支払先区分
    public knshknknrmisiNo: string = ''; // 鑑賞券管理明細番号
    public knymiNum: string = ''; // 購入枚数
    public shhziTyp: string = ''; // 消費税区分
    public shhziRt: string = ''; // 消費税率
    public shhziUnip: string = ''; // 消費税単価
    public mvitckthikyftntsuryUnip: string = ''; // ムビチケ配給負担手数料単価
    public mvitcktkgyftntsuryUnip: string = ''; // ムビチケ興行負担手数料単価
    public mvitcktusrtsuryUnip: string = ''; // ムビチケユーザー手数料単価
    public knshknhmbiUnip: string = ''; // 鑑賞券販売単価
    public pstrgzUrl: string = ''; // ポスター画像URL
    public shknhikygishCd: string = ''; // 主幹配給会社コード
    public eishhshkTyp: string = ''; // 映写方式区分
    public knshTyp: string = ''; // 券種区分
    public knshkbnNm: string = ''; // 券種区分名称

    public static parse (resultObject): SelectIchjknrInfoResult {
        let result = new SelectIchjknrInfoResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
