import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 代行会社取引登録呼出out
 * @class
 */
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

    public static PARSE(resultObject: any): GetGmoEntryTranResult {
        const result = new GetGmoEntryTranResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }
}
