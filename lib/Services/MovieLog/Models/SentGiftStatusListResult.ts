import * as CommonUtil from '../../../Common/Util/Util';

/**
 * 券種別会員購入鑑賞情報
 * @interface
 */
export interface KnshbtskiinknygftInfo {
    /**
     * 券種区分名称
     */
    knshkbnNm: string;
    /**
     * 鑑賞券枚数
     */
    knshkmmiNum: string;
}

/**
 * ギフト送信状況リスト検索out
 */
export default class SentGiftStatusListResult {
    /**
     * ギフト管理番号
     */
    public gftknrNo: string;
    /**
     * ギフト送信日時
     */
    public gftsfDt: string;
    /**
     * 宛先名称
     */
    public gftatskNm: string;
    /**
     * ギフトステータス
     */
    public gftsttsTyp: string;
    /**
     * 券種別会員購入鑑賞情報(itemArray)
     */
    public knshbtskiinknygftInfo: KnshbtskiinknygftInfo[];
    /**
     * データ整形
     * @param {any} resultObject
     * @returns {SentGiftStatusListResult} ギフト送信状況リスト検索out
     */
    // tslint:disable-next-line:function-name
    public static parse(resultObject: any): SentGiftStatusListResult {
        const result = new SentGiftStatusListResult();
        Object.keys(resultObject).forEach((propertyName) => {
            const normalizedName = CommonUtil.normalizePropertyName(propertyName);
            const property = resultObject[propertyName];

            if (normalizedName === 'knshbtskiinknygftInfo') {
                const infos: KnshbtskiinknygftInfo[] = [];
                if (property !== null && property.hasOwnProperty('KnshbtskiinknygftInfo')) {
                    if (Array.isArray(property.KnshbtskiinknygftInfo)) {
                        for (const info of property.KnshbtskiinknygftInfo) {
                            infos.push(info);
                        }
                    } else {
                        infos.push(property.KnshbtskiinknygftInfo);
                    }
                }

                result[normalizedName] = infos;
            } else {
                (<any>result)[normalizedName] = property;
            }
        });

        return result;
    };

}
