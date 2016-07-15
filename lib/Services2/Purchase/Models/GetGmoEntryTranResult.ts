import CommonUtil from '../../../Common/Util/Util';

export default class GetGmoEntryTranResult {
    /**
     * 決済管理番号
     */
    public kssiknrNo: string;
    /**
     * 取引ＩＤ
     */
    public accessId: string;
    /**
     * 取引パスワード
     */
    public accessPwd: string;
    /**
     * 決済エラー種類区分
     */
    public kssierrrshriTyp: string;
    /**
     * 決済エラーメッセージ本文
     */
    public kssierrrmssgTxt: string;

    public static parse (resultObject): GetGmoEntryTranResult {
        let result = new GetGmoEntryTranResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
