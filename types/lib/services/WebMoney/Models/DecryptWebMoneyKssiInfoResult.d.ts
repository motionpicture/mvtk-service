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
