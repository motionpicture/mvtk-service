
import { Util } from '../../../common/util/Util';

/**
 * GetDigitalIncentiveDownloadLinkListResult
 */
export class GetDigitalIncentiveDownloadLinkListResult {
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
    public dgtlincntvInfo: DgtlincntvInfo[];

    public static parse(resultObject: any): GetDigitalIncentiveDownloadLinkListResult {
        const result = new GetDigitalIncentiveDownloadLinkListResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'dgtlincntvInfo') {
                const dgtlincntvInfos: DgtlincntvInfo[] = [];

                if (property !== null && property.hasOwnProperty('DgtlincntvInfo')) {
                    if (Array.isArray(property.DgtlincntvInfo)) {
                        for (const info of property.DgtlincntvInfo) {
                            dgtlincntvInfos.push(info);
                        }
                    } else {
                        dgtlincntvInfos.push(property.DgtlincntvInfo);
                    }
                }

                result[normalizedName] = dgtlincntvInfos;
            } else {
                (<any>result)[normalizedName] = property;
            }
        }

        return result;
    }
}

export interface DgtlincntvInfo {
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
        DgtlincntvshsiInfo: {
            /**
             * デジタルインセンティブ枝番号
             */
            DGTLINCNTVED_NO: string;
            /**
             * デジタルインセンティブ詳細タイトル
             */
            DGTLINCNTVSHSI_TTL: string;
        }[];
    };
}
