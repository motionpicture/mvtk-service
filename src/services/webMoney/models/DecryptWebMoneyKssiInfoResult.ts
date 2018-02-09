import { Util } from '../../../common/util/Util';

/**
 * DecryptWebMoneyKssiInfoResult
 */
export class DecryptWebMoneyKssiInfoResult {
    public decryptedkssiinfo: string;
    public vrsinjh: string;
    public wbmnysettleCd: string;
    public tranDt: string; // 形式：YYYYMMDDHHmmss
    public wbmnymanagementNo: string;
    public sinyjshkbtsFlg: string;
    public shhnNum: string;
    public shhnCd: string;
    public hcchCd: string;

    public static parse(resultObject: any): DecryptWebMoneyKssiInfoResult {
        const result = new DecryptWebMoneyKssiInfoResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            (<any>result)[normalizedName] = property;
        }

        return result;
    }
}
