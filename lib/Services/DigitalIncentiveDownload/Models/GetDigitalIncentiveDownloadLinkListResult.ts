import CommonUtil from '../../../common/util/Util';

export default class GetDigitalIncentiveDownloadLinkListResult {
    /**
     * デバイス区分
     */
    public dvcTyp: string;
    /**
     * 購入管理番号
     */
    public knyknrNo: string;
    /**
     * デジタルインセンティブ情報（itemArray）
     */
    public dgtlincntvInfo: Array<DgtlincntvInfo>

    public static parse(resultObject): GetDigitalIncentiveDownloadLinkListResult {
        let result = new GetDigitalIncentiveDownloadLinkListResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'dgtlincntvInfo') {
                let dgtlincntvInfos: Array<DgtlincntvInfo> = [];

                if (property !== null && property.hasOwnProperty('DgtlincntvInfo')) {
                    if (Array.isArray(property.DgtlincntvInfo)) {
                        for (let info of property.DgtlincntvInfo) {
                            dgtlincntvInfos.push(info);
                        }
                    } else {
                        dgtlincntvInfos.push(property.DgtlincntvInfo);
                    }
                }

                result[normalizedName] = dgtlincntvInfos;
            } else {
                result[normalizedName] = property;
            }
        }

        return result;
    };
}

interface DgtlincntvInfo {
    /**
     * デジタルインセンティブコード
     */
    DGTLINCNTV_CD: string;
    /**
     * デジタルインセンティブタイトル
     */
    DGTLINCNTV_TTL: string;
    /**
     * デジタルインセンティブ説明本文
     */
    DGTLINCNTVSTSMI_TXT: string;
    /**
     * サンプル画像URL
     */
    SMPLGZ_URL: string;
    /**
     * デジタルインセンティブ購入開始年月日
     */
    DGTLINCNTVKNYKISH_YMD: string;
    /**
     * デジタルインセンティブ購入終了年月日
     */
    DGTLINCNTVKNYSHRY_YMD: string;
    /**
     * デジタルインセンティブダウンロード有効期間
     */
    DGTLINCNTVDWNLODYK_TM: string;
    /**
     * デジタルインセンティブダウンロード上限回数
     */
    DGTLINCNTVDWNLODJGNKI_NUM: string;
    /**
     * 作品デジタルインセンティブ備考
     */
    SKHNDGTLINCNTV_RMK: string;
    /**
     * ダウンロード回数
     */
    DWNLODKI_NUM: string;
    /**
     * デジタルインセンティブ詳細情報 （itemArray）
     */
    DGTLINCNTVSHSI_INFO: {
        DgtlincntvshsiInfo: Array<{
            /**
             * デジタルインセンティブ枝番号
             */
            DGTLINCNTVED_NO: string;
            /**
             * デジタルインセンティブ詳細タイトル
             */
            DGTLINCNTVSHSI_TTL: string;
        }>
    };
}