import CommonUtil from '../../../Common/Util/Util';

export default class GetGmoExecTranResult {
    public acsKbn: string = ''; // 本人認証サービス対応区分
    public acsurl: string = ''; // 本人認証パスワード入力画面URL
    public pareq: string = ''; // 本人認証要求電文
    public md: string = ''; // 取引ＩＤ
    public forwardCd: string = ''; // 仕向先会社コード
    public tranDt: string = ''; // 決済日時(形式：20160518133125)
    public approveNo: string = ''; // 決済承認番号
    public tranId: string = ''; // トランザクションＩＤ(形式1605181331111111111111878508：)
    public auaccssId: string = ''; // au取引ID
    public autkn: string = ''; // auトークン
    public austrtUrl: string = ''; // au支払手続きインターフェイスURL
    public docomoaccssId: string = ''; // ドコモ取引ID
    public docomotkn: string = ''; // ドコモトークン
    public docomostrtUrl: string = ''; // ドコモ支払手続きインターフェイスURL
    public kssierrrshriTyp: string = ''; // 決済エラー種類区分
    public kssierrrmssgTxt: string = ''; // 決済エラーメッセージ本文

    public static parse (resultObject): GetGmoExecTranResult {
        let result = new GetGmoExecTranResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
