import CommonUtil from '../../../common/util/Util';

/**
 * 特典コード確保out
 * @class
 */
export default class PreserveCodeResult {
    /**
     * 特典コード確保番号 (特典コード確保時に採番される一意な番号)
     */
    public tktncdkkhNo: string[] = [];
    /**
     * 特典在庫状況メッセージ本文 (在庫僅少、在庫切れ時表示メッセージ（HTMLタグを含む）)
     */
    public tktnzikjkymsgTxt: string[] = [];

    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): PreserveCodeResult {
        const result = new PreserveCodeResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'tktncdkkhNo') {
                const tktncdkkhNoList: string[] = [];

                if (property !== null && property.hasOwnProperty('TktncdkkhNo')) {
                    if (Array.isArray(property.TktncdkkhNo)) {
                        for (const tktncdkkhNo of property.TktncdkkhNo) {
                            tktncdkkhNoList.push(tktncdkkhNo);
                        }
                    } else {
                        tktncdkkhNoList.push(property.TktncdkkhNo);
                    }
                }

                result[normalizedName] = tktncdkkhNoList;
            } else if (normalizedName === 'tktnzikjkymsgTxt') {
                const tktnzikjkymsgTxts: string[] = [];

                if (property !== null && property.hasOwnProperty('TktnzikjkymsgTxt')) {
                    if (Array.isArray(property.TktnzikjkymsgTxt)) {
                        for (const tktnzikjkymsgTxt of property.TktnzikjkymsgTxt) {
                            tktnzikjkymsgTxts.push(tktnzikjkymsgTxt);
                        }
                    } else {
                        tktnzikjkymsgTxts.push(property.TktnzikjkymsgTxt);
                    }
                }

                result[normalizedName] = tktnzikjkymsgTxts;
            } else {
                (<any>result)[normalizedName] = property;
            }
        });

        return result;
    }
}
