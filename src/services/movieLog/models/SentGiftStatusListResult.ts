
import { Util } from '../../../common/util/Util';

export interface KnshbtskiinknygftInfo {
    /**
     * 券種区分名称
     */
    knshkbnNm: string;
    /**
     * 鑑賞券枚数
     */
    knshkmmiNum : string;
}

/**
 * SentGiftStatusListResult
 */
export class SentGiftStatusListResult {

    /**
     * ギフト管理番号
     */
    public gftknrNo: string;
    /**
     * ギフト送信日時
     */
    public gftsfDt : string;
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

    public static parse(resultObject: any): SentGiftStatusListResult {
        const result = new SentGiftStatusListResult();

        for (const propertyName in resultObject) {
            const normalizedName = Util.normalizePropertyName(propertyName);
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
        }

        return result;
    }

}
