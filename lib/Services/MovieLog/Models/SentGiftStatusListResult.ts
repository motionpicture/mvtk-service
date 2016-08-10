import CommonUtil from '../../../common/util/Util';
//TODO
//メンバ名入力

interface KnshbtskiinknygftInfo {
    /**
     * 券種区分名称
     */
    knshkbnNm: string;
    /**
     * 鑑賞券枚数
     */
    knshkmmiNum : string;
}

export default class SentGiftStatusListResult {
    
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
    public knshbtskiinknygftInfo: Array<KnshbtskiinknygftInfo>;

    public static parse (resultObject): SentGiftStatusListResult {
        let result = new SentGiftStatusListResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'knshbtskiinknygftInfo') {
                let infos: Array<KnshbtskiinknygftInfo> = [];
                if (property !== null && property.hasOwnProperty('KnshbtskiinknygftInfo')) {
                    if (Array.isArray(property.KnshbtskiinknygftInfo)) {
                        for (let info of property.KnshbtskiinknygftInfo) {
                            infos.push(info);
                        }
                    } else {
                        infos.push(property.KnshbtskiinknygftInfo);
                    }
                }

                result[normalizedName] = infos;
            } else {
                result[normalizedName] = property;
            }
        }

        return result;
    };

}
