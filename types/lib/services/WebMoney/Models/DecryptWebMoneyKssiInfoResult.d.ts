/**
 * WebMoney決済情報複合化out
 * @class
 */
export default class DecryptWebMoneyKssiInfoResult {
    decryptedkssiinfo: string;
    vrsinjh: string;
    wbmnysettleCd: string;
    tranDt: string;
    wbmnymanagementNo: string;
    sinyjshkbtsFlg: string;
    shhnNum: string;
    shhnCd: string;
    hcchCd: string;
    static PARSE(resultObject: any): DecryptWebMoneyKssiInfoResult;
}
