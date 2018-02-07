import CommonUtil from '../../../common/util/Util';

export default class DecryptWebMoneyKssiInfoResult {
    public decryptedkssiinfo: string; // 
    public vrsinjh: string; // 
    public wbmnysettleCd: string; // 
    public tranDt: string; // 形式：YYYYMMDDHHmmss
    public wbmnymanagementNo: string; // 
    public sinyjshkbtsFlg: string; // 
    public shhnNum: string; // 
    public shhnCd: string; // 
    public hcchCd: string; // 

    public static parse (resultObject): DecryptWebMoneyKssiInfoResult {
        let result = new DecryptWebMoneyKssiInfoResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            result[normalizedName] = property;
        }

        return result;
    }
}
