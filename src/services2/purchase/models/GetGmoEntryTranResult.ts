import { Util } from '../../../common/util/Util';

/**
 * 代行会社取引登録呼出out
 */
export class GetGmoEntryTranResult {
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

    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): GetGmoEntryTranResult {
        const result = new GetGmoEntryTranResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }
}
