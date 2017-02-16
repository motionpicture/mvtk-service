import * as CommonUtil from '../../../Common/Util/Util';

/**
 * WebMoney決済情報複合化out
 * @class
 */
export default class DecryptWebMoneyKssiInfoResult {
    public decryptedkssiinfo: string;
    public vrsinjh: string;
    public wbmnysettleCd: string;
    public tranDt: string; // 形式：YYYYMMDDHHmmss
    public wbmnymanagementNo: string;
    public sinyjshkbtsFlg: string;
    public shhnNum: string;
    public shhnCd: string;
    public hcchCd: string;

    public static PARSE(resultObject: any): DecryptWebMoneyKssiInfoResult {
        const result = new DecryptWebMoneyKssiInfoResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        });

        return result;
    }
}
