import * as CommonUtil from '../../../Common/Util/Util';


interface KnshbtskiinknyknshInfo {
    /**
     * 券種区分名称
     */
    knshkbnNm: string;
    /**
     * 鑑賞券枚数
     */
    knshkmmiNum : string;
}

export default class watchRecordResult {
    /**
     * 座席予約番号
     */
    public zskyykNo: string;
    /**
     * 鑑賞年月日
     */
    public knshYmd : string;
    /**
     * 鑑賞時刻
     */
    public knshHms: string;
    /**
     * 鑑賞サイトコード
     */
    public knshstCd: string;
    /**
     * 鑑賞サイト名称
     */
    public knshstNm: string;
    /**
     * 券種別会員購入鑑賞情報(itemArray)	
     */
    public knshbtskiinknyknshInfo: Array<KnshbtskiinknyknshInfo>;

    public static PARSE (resultObject): watchRecordResult {
        let result = new watchRecordResult();

        for (let propertyName in resultObject) {
            let normalizedName = CommonUtil.normalizePropertyName(propertyName);
            let property = resultObject[propertyName];

            if (normalizedName === 'knshbtskiinknyknshInfo') {
                let infos: Array<KnshbtskiinknyknshInfo> = [];
                if (property !== null && property.hasOwnProperty('KnshbtskiinknyknshInfo')) {
                    if (Array.isArray(property.KnshbtskiinknyknshInfo)) {
                        for (let info of property.KnshbtskiinknyknshInfo) {
                            infos.push(info);
                        }
                    } else {
                        infos.push(property.KnshbtskiinknyknshInfo);
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
