import CommonUtil from '../../../common/util/Util';

/**
 * 特典コード確保out
 * @class
 */
export default class PreserveCodeResult {

    /**
     * 特典コード情報
     */
    public tktncdkkhInfo: {
        /**
         * 特典コード確保番号 (特典コード確保時に採番される一意な番号)
         */
        TKTNCDKKH_NO: string
    }[];

    /**
     * 特典在庫状況メッセージ本文 (在庫僅少、在庫切れ時表示メッセージ（HTMLタグを含む）)
     */
    public tktnzikjkymsgTxt: string[];

    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): PreserveCodeResult {
        const result = new PreserveCodeResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'tktncdkkhInfo') {
                const tktncdkkhInfoList: { TKTNCDKKH_NO: string }[] = [];
                if (property !== null && property.hasOwnProperty('TktncdkkhInfo')) {
                    if (Array.isArray(property.TktncdkkhInfo)) {
                        for (const tktncdkkhInfo of property.TktncdkkhInfo) {
                            tktncdkkhInfoList.push(tktncdkkhInfo);
                        }
                    } else {
                        tktncdkkhInfoList.push(property.TktncdkkhInfo);
                    }
                }

                result[normalizedName] = tktncdkkhInfoList;
            } else if (normalizedName === 'tktnzikjkymsgTxt') {
                const tktnzikjkymsgTxts = [];
                if (property !== null && property.hasOwnProperty('string')) {
                    if (Array.isArray(property.string)) {
                        for (const tktnzikjkymsgTxt of property.string) {
                            tktnzikjkymsgTxts.push(tktnzikjkymsgTxt);
                        }
                    }
                    else {
                        tktnzikjkymsgTxts.push(property.string);
                    }
                }
                result[normalizedName] = tktnzikjkymsgTxts;
            } else {
                (<any>result)[normalizedName] = property;
            }
        });

        if (result.tktncdkkhInfo === undefined) {
            result.tktncdkkhInfo = [];
        }

        return result;
    }
}
